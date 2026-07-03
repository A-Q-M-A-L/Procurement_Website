require('dotenv').config()

const crypto = require('crypto')
const cors = require('cors')
const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const nodemailer = require('nodemailer')
const { z } = require('zod')

const environmentSchema = z.object({
  PORT: z.coerce.number().int().positive().default(3001),
  SMTP_HOST: z.string().min(1, 'SMTP_HOST is required.'),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_SECURE: z.enum(['true', 'false']).default('false'),
  SMTP_USER: z.string().min(1, 'SMTP_USER is required.'),
  SMTP_PASS: z.string().min(1, 'SMTP_PASS is required.'),
  MAIL_TO: z.string().min(1, 'MAIL_TO is required.'),
  MAIL_FROM: z.string().min(1, 'MAIL_FROM is required.'),
  ALLOWED_ORIGINS: z.string().min(1, 'ALLOWED_ORIGINS is required.'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(600000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),
  READINESS_VERIFY_TIMEOUT_MS: z.coerce.number().int().positive().default(5000),
  TRUST_PROXY: z.enum(['true', 'false']).default('false')
})

let env

try {
  env = environmentSchema.parse(process.env)
} catch (error) {
  console.error('Invalid email server configuration.', error.flatten ? error.flatten() : error)
  process.exit(1)
}

const allowedOrigins = env.ALLOWED_ORIGINS
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

if (!allowedOrigins.length) {
  console.error('ALLOWED_ORIGINS must contain at least one origin.')
  process.exit(1)
}

const app = express()
app.disable('x-powered-by')

if (env.TRUST_PROXY === 'true') {
  app.set('trust proxy', 1)
}

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_SECURE === 'true',
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000
})

const optionalText = (maxLength) => z.string().trim().max(maxLength).optional().default('')

const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required.').max(100, 'Name is too long.'),
  email: z.string().trim().email('Please provide a valid email address.').max(160, 'Email is too long.'),
  phone: optionalText(40),
  company: optionalText(100),
  service: optionalText(120),
  projectLocation: optionalText(120),
  budget: optionalText(120),
  timeline: optionalText(120),
  message: z.string().trim().min(20, 'Message must be at least 20 characters.').max(4000, 'Message is too long.'),
  website: optionalText(120)
})

const withTimeout = (promise, timeoutMs) =>
  Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Timed out while verifying SMTP readiness.')), timeoutMs)
    })
  ])

const buildMailText = (payload, requestId) => {
  const sections = [
    'Frontier Projects quote request',
    '',
    `Request ID: ${requestId}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Company: ${payload.company || 'Not provided'}`,
    `Service: ${payload.service || 'Not provided'}`,
    `Project Location: ${payload.projectLocation || 'Not provided'}`,
    `Budget: ${payload.budget || 'Not provided'}`,
    `Timeline: ${payload.timeline || 'Not provided'}`,
    '',
    'Message:',
    payload.message
  ]

  return sections.join('\n')
}

const buildConfirmationText = (payload) => {
  const sections = [
    `Hello ${payload.name},`,
    '',
    'Thank you for contacting Frontier Projects.',
    '',
    `We have received your inquiry${payload.service ? ` regarding ${payload.service}` : ''} and our team will review it shortly.`,
    'If we need any clarification, we will follow up directly by email or phone.',
    '',
    'Regards,',
    'Frontier Projects',
    env.MAIL_TO
  ]

  return sections.join('\n')
}

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false
  })
)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        callback(null, true)
        return
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Origin is not allowed by CORS'))
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'X-Request-Id']
  })
)

app.use(express.json({ limit: '25kb' }))

app.use((req, res, next) => {
  req.requestId = crypto.randomUUID()
  res.setHeader('x-request-id', req.requestId)

  const startedAt = Date.now()
  res.on('finish', () => {
    console.info(`[${req.requestId}] ${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - startedAt}ms`)
  })

  next()
})

const quoteLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Too many quote requests were submitted from this connection. Please wait and try again.'
  }
})

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  })
})

app.get('/ready', async (_req, res) => {
  try {
    await withTimeout(transporter.verify(), env.READINESS_VERIFY_TIMEOUT_MS)
    res.json({
      status: 'ready',
      smtpHost: env.SMTP_HOST
    })
  } catch (error) {
    res.status(503).json({
      status: 'not-ready',
      message: error.message || 'SMTP verification failed.'
    })
  }
})

app.post('/quote', quoteLimiter, async (req, res, next) => {
  try {
    const parsed = quoteSchema.safeParse(req.body)

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]
      res.status(400).json({
        message: firstIssue?.message || 'Invalid quote request.',
        errors: parsed.error.issues.map((issue) => issue.message)
      })
      return
    }

    const payload = parsed.data

    if (payload.website) {
      res.status(202).json({
        message: 'Your quote request has been received.'
      })
      return
    }

    await transporter.sendMail({
      from: env.MAIL_FROM,
      to: env.MAIL_TO,
      replyTo: payload.email,
      subject: `Frontier Projects Quote Request${payload.service ? ` - ${payload.service}` : ''}`,
      text: buildMailText(payload, req.requestId),
      headers: {
        'X-Request-ID': req.requestId
      }
    })

    try {
      await transporter.sendMail({
        from: env.MAIL_FROM,
        to: payload.email,
        replyTo: env.MAIL_TO,
        subject: 'We have received your inquiry - Frontier Projects',
        text: buildConfirmationText(payload),
        headers: {
          'X-Request-ID': req.requestId
        }
      })
    } catch (confirmationError) {
      console.warn(`[${req.requestId}] Customer confirmation email failed`, confirmationError)
    }

    res.status(200).json({
      message: 'Your quote request has been sent successfully.'
    })
  } catch (error) {
    next(error)
  }
})

app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found.' })
})

app.use((error, _req, res, _next) => {
  if (error.message === 'Origin is not allowed by CORS') {
    res.status(403).json({ message: error.message })
    return
  }

  console.error(`[${_req.requestId || 'unknown-request'}]`, error)
  res.status(500).json({ message: 'Unable to process the request right now.' })
})

app.listen(env.PORT, () => {
  console.log(`Quote server listening on port ${env.PORT}`)
})
