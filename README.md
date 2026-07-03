# Frontier Projects Website

Static Nuxt brochure site for Frontier Projects with four pages:

- `Home`
- `Portfolio`
- `Our Services`
- `Get a Quote`

The quote form submits to a tiny standalone Express SMTP server in `Email_Express_Server/`.

## Project Structure

- `app/`: Nuxt pages, layouts, reusable components and shared content files
- `.env`: public runtime values used by the frontend
- `Email_Express_Server/`: minimal Express server that sends quote requests by email

## Frontend Setup

Install the Nuxt app dependencies:

```bash
npm install
```

Copy or review the frontend env file:

```bash
cp .env.example .env
```

Start the frontend locally:

```bash
npm run dev
```

The site runs on `http://localhost:3000`.

## Quote Server Setup

Move into the mail server folder and install its dependencies:

```bash
cd Email_Express_Server
npm install
```

Copy or review the mail server env file:

```bash
cp .env.example .env
```

Update the SMTP settings in `Email_Express_Server/.env` when the real mailbox credentials are available:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`
- `MAIL_FROM`
- `ALLOWED_ORIGINS`
- `RATE_LIMIT_WINDOW_MS`
- `RATE_LIMIT_MAX`
- `READINESS_VERIFY_TIMEOUT_MS`
- `TRUST_PROXY`

Start the quote server locally:

```bash
npm run dev
```

The server runs on `http://localhost:3001`.

Public endpoints:

- `GET /health` for liveness
- `GET /ready` for SMTP readiness verification
- `POST /quote` for quote requests

## Build and Verification

Generate the static frontend output:

```bash
npm run generate
```

Useful verification checks:

1. Open all four pages and confirm the layout works on mobile, tablet and desktop widths.
2. Confirm company email, phone and domain are coming from `.env`, not from component markup.
3. Confirm `sitemap.xml`, `robots.txt`, favicon, canonical URLs and social preview metadata are present in the built output.
4. Visit `http://localhost:3001/health` and confirm it returns a healthy JSON response.
5. Visit `http://localhost:3001/ready` and confirm it returns `ready` only after real SMTP settings are configured correctly.
6. Submit the quote form with valid test data after real SMTP credentials are added.
7. Submit invalid data and confirm the frontend shows validation errors cleanly.
8. Confirm the quote server logs requests and that rate limiting works after repeated submissions.

## Deployment Notes

Recommended setup:

1. Deploy the Nuxt site as a static build from `.output/public`.
2. Deploy `Email_Express_Server` as a small Node service.
3. Point `NUXT_PUBLIC_API_URL` to that deployed API server.
4. Prefer a same-domain reverse proxy in production if possible, for example:
   - frontend on `https://frontierprojects.net`
   - API proxied from `/quote` or hosted at `https://api.frontierprojects.net`
5. Keep SMTP credentials only in the server env file, never in the frontend.
6. Set `TRUST_PROXY=true` if the API runs behind a reverse proxy or load balancer.

## SMTP Verification Checklist

Before launch:

1. Confirm the real SMTP host, port, username and password are present in `Email_Express_Server/.env`.
2. Confirm `MAIL_FROM` is accepted by the SMTP provider and matches the verified mailbox/domain policy.
3. Confirm `MAIL_TO` points to the production inbox that should receive quote requests.
4. Start the quote server and verify `GET /ready` returns a `ready` response.
5. Submit one valid test quote and verify:
   - the email arrives in the target inbox
   - `replyTo` is set to the customer email
   - the message body contains service, location, budget, timeline and scope details

## Launch Smoke Test

Run this checklist before going live:

1. `npm run generate` completes successfully.
2. All four pages render and navigation works on desktop and mobile.
3. Portfolio, services and quote content read like production content, not placeholders.
4. The quote form success and error states are visible and understandable.
5. `GET /health` returns healthy status.
6. `GET /ready` confirms SMTP readiness.
7. Invalid `POST /quote` requests return validation errors.
8. Valid `POST /quote` requests send email successfully.

## Monitoring and Operations

For the initial launch phase, keep operations lightweight:

- review quote server logs after deployment and after the first live submissions
- monitor `/health` and `/ready` from your hosting or uptime tool
- keep a copy of working SMTP settings and deployment env vars outside the codebase
- if spam increases, tighten `RATE_LIMIT_MAX` and reduce `RATE_LIMIT_WINDOW_MS`
