<script setup lang="ts">
import { nextTick } from 'vue'
import { quoteServiceOptions } from '~/data/services'
import SectionIntro from './SectionIntro.vue'

type QuoteFormState = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  projectLocation: string
  budget: string
  timeline: string
  message: string
  website: string
}

type FieldName = 'name' | 'email' | 'message'

const { apiUrl, contactEmail, phone } = useSiteProfile()

const createInitialState = (): QuoteFormState => ({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: quoteServiceOptions[0] || '',
  projectLocation: '',
  budget: '',
  timeline: '',
  message: '',
  website: ''
})

const form = reactive<QuoteFormState>(createInitialState())
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')
const fieldError = ref<FieldName | ''>('')
const mountedAt = Date.now()
const statusMessageId = 'quote-form-status'
const statusRef = ref<HTMLElement | null>(null)
const nameInputRef = ref<HTMLInputElement | null>(null)
const emailInputRef = ref<HTMLInputElement | null>(null)
const messageInputRef = ref<HTMLTextAreaElement | null>(null)

const endpoint = computed(() => {
  const normalizedBase = (apiUrl || '').trim().replace(/\/$/, '')
  return normalizedBase ? `${normalizedBase}/quote` : '/quote'
})

const resetForm = () => {
  Object.assign(form, createInitialState())
  fieldError.value = ''
}

const focusStatus = async () => {
  await nextTick()
  statusRef.value?.focus()
  statusRef.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

const focusField = async (field: FieldName) => {
  await nextTick()
  const map = {
    name: nameInputRef.value,
    email: emailInputRef.value,
    message: messageInputRef.value
  }
  const el = map[field]
  el?.focus()
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const validate = (): { message: string; field: FieldName | '' } => {
  if (!form.name.trim()) {
    return { message: 'Please enter your name.', field: 'name' }
  }

  if (!form.email.trim()) {
    return { message: 'Please enter your email address.', field: 'email' }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(form.email.trim())) {
    return { message: 'Please provide a valid email address.', field: 'email' }
  }

  if (!form.message.trim()) {
    return { message: 'Please describe your project requirement.', field: 'message' }
  }

  if (form.message.trim().length < 20) {
    return {
      message: 'Please share a little more project detail so the team can respond usefully (at least 20 characters).',
      field: 'message'
    }
  }

  if (Date.now() - mountedAt < 1500) {
    return { message: 'Please wait a moment and submit again.', field: '' }
  }

  return { message: '', field: '' }
}

const submitQuote = async () => {
  submitError.value = ''
  submitSuccess.value = ''
  fieldError.value = ''

  if (form.website.trim()) {
    submitSuccess.value = 'Your request has been received.'
    resetForm()
    await focusStatus()
    return
  }

  const validation = validate()
  if (validation.message) {
    submitError.value = validation.message
    fieldError.value = validation.field
    if (validation.field) {
      await focusField(validation.field)
    } else {
      await focusStatus()
    }
    return
  }

  isSubmitting.value = true

  try {
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      service: form.service.trim(),
      projectLocation: form.projectLocation.trim(),
      budget: form.budget.trim(),
      timeline: form.timeline.trim(),
      message: form.message.trim(),
      website: form.website.trim()
    }

    const response = await $fetch<{ message?: string }>(endpoint.value, {
      method: 'POST',
      body: payload
    })

    submitSuccess.value =
      response.message || 'Your quote request has been sent. Frontier Projects will continue the conversation offline.'
    resetForm()
    await focusStatus()
  } catch (error: unknown) {
    const message =
      error && typeof error === 'object' && 'data' in error && error.data && typeof error.data === 'object' && 'message' in error.data
        ? String(error.data.message)
        : 'The quote request could not be sent right now. Please try again or contact us directly.'

    submitError.value = message
    await focusStatus()
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="quote-form-shell card-panel">
    <SectionIntro
      eyebrow="Get a Quote"
      title="Send your project requirement"
      description="Share the scope and preferred timeline. The team will receive it by email and respond directly."
      variant="centered"
    />

    <form class="quote-form" :aria-busy="isSubmitting ? 'true' : 'false'" @submit.prevent="submitQuote">
      <fieldset class="quote-form__fieldset" :disabled="isSubmitting">
        <div class="quote-form__grid">
          <label>
            <span>Name *</span>
            <input
              ref="nameInputRef"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Your full name"
              required
              :aria-invalid="fieldError === 'name' ? 'true' : 'false'"
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Email *</span>
            <input
              ref="emailInputRef"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
              :aria-invalid="fieldError === 'email' ? 'true' : 'false'"
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Phone</span>
            <input
              v-model="form.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              inputmode="tel"
              placeholder="+92..."
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Company</span>
            <input
              v-model="form.company"
              type="text"
              name="company"
              autocomplete="organization"
              placeholder="Company name"
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Service</span>
            <select v-model="form.service" name="service" :aria-describedby="statusMessageId">
              <option v-for="service in quoteServiceOptions" :key="service" :value="service">
                {{ service }}
              </option>
            </select>
          </label>

          <label>
            <span>Project Location</span>
            <input
              v-model="form.projectLocation"
              type="text"
              name="projectLocation"
              placeholder="City or site location"
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Budget</span>
            <input
              v-model="form.budget"
              type="text"
              name="budget"
              placeholder="Optional project budget"
              :aria-describedby="statusMessageId"
            />
          </label>

          <label>
            <span>Timeline</span>
            <input
              v-model="form.timeline"
              type="text"
              name="timeline"
              placeholder="Target start or deadline"
              :aria-describedby="statusMessageId"
            />
          </label>
        </div>

        <label class="quote-form__message">
          <span>Message *</span>
          <textarea
            ref="messageInputRef"
            v-model="form.message"
            name="message"
            rows="6"
            placeholder="Describe the project type, scope, materials, procurement needs or support you require."
            required
            :aria-invalid="fieldError === 'message' ? 'true' : 'false'"
            :aria-describedby="statusMessageId"
          ></textarea>
        </label>

        <label class="quote-form__honeypot" aria-hidden="true">
          <span>Website</span>
          <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
        </label>
      </fieldset>

      <div class="quote-form__footer">
        <div class="quote-form__contact">
          <p>Direct contact and expected response:</p>
          <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
          <a :href="`tel:${phone}`">{{ phone }}</a>
          <span class="quote-form__response-note">Most inquiries should be reviewed within one business day.</span>
        </div>

        <button class="button button--primary" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Quote Request' }}
        </button>
      </div>

      <div
        :id="statusMessageId"
        ref="statusRef"
        class="form-status"
        tabindex="-1"
        aria-live="polite"
        aria-atomic="true"
      >
        <p v-if="submitError" class="form-message form-message--error" role="alert">{{ submitError }}</p>
        <p v-if="submitSuccess" class="form-message form-message--success" role="status">{{ submitSuccess }}</p>
      </div>
    </form>
  </section>
</template>
