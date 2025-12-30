<template>
    <div>
      <div class="grid sm:grid-cols-2 items-start gap-16 mx-auto font-[sans-serif]">
            <div>
              <h1 class="text-3xl font-extrabold">{{ $t('home.contact') }}</h1>
              <p class="text-base mt-4 typewriter" v-typewriter v-html="$t('contact.basic_txt')" />
              <div class="mt-12">
                  <h2 class="text-2xl font-bold">{{ t('contact.other') }}</h2>
                  <ul class="flex mt-4">
                      <li class="flex items-center justify-center shrink-0">
                        <!-- Email -->
                        <a
                          href="mailto:booking@jaycamdj.com?Subject=Hey%20Jay,%20I%20want%20your%20music"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          class="mb-2 inline-block rounded bg-jayllow-500 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 512 512">
                              <path
                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li class="flex items-center justify-center shrink-0">
                        <!-- Whatsapp -->
                        <a
                          :href="getLinkWhatsApp('+34655834612', t('contact.message_whatsapp'))" target="_blank"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          class="mb-2 inline-block rounded bg-[#26CC64] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <span class="[&>svg]:h-4 [&>svg]:w-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 448 512">
                              <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                  </ul>
              </div>
            </div>
            <form @submit.prevent="submitForm" class="ml-auto space-y-4">
              <input v-model.trim="form.name" type="text" id="contact_name" name="contact_name" class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm text-jayge-700 outline-blue-500 focus:bg-transparent focus:text-jayge-300" :placeholder="t('contact.name')" />
                <span v-if="errors.nameError" class="error text-orange-600">{{ errors.nameError }}</span>
              <input v-model.trim="form.email" type="email" id="contact_email" name="contact_email" class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm text-jayge-700 outline-blue-500 focus:bg-transparent focus:text-jayge-300" :placeholder="t('contact.email')" />
                <span v-if="errors.emailError" class="error text-orange-600">{{ errors.emailError }}</span>
              <textarea v-model.trim="form.message" rows="5" id="contact_message" name="contact_message" class="w-full rounded-md px-4 bg-gray-100 text-sm text-jayge-700 pt-3 outline-blue-500 focus:bg-transparent focus:text-jayge-300" :placeholder="t('contact.message')"></textarea>
                  <span v-if="errors.messageError" class="error text-orange-600">{{ errors.messageError }}</span>
                  <br v-if="errors.generalMessage" />
                  <span
                    v-if="errors.generalMessage"
                    :class="{
                      'text-green-600': isSuccess,
                      'text-orange-600': !isSuccess
                    }"
                                >
                    {{ errors.generalMessage }}
                  </span>
              <button
                  type="submit"
                  :disabled="waiting"
                  class="text-white bg-jayllow-500 hover:bg-jayllow-600 tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6! flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!waiting">{{ t('contact.send') }}</span>
                <span v-else class="loader-circle" aria-hidden="true"></span>
              </button>
            </form>
        </div>
    </div>
  </template>

  <script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  nameError: '',
  emailError: '',
  messageError: '',
  generalMessage: '',
})

const isSuccess = ref(false)
const waiting = ref(false)
const checkFields = ref(false)

// Function to validate the name
const validateName = () => {
  errors.nameError = !form.name.trim() ? t('contact.error_name_required') : ''
}

// Function to validate the email
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  errors.emailError = !emailRegex.test(form.email) ? t('contact.error_valid_email') : ''
}

// Function to validate the message
const validateMessage = () => {
  errors.messageError = !form.message.trim() ? t('contact.error_message_required') : ''
}

// Function to get WhatsApp link
const getLinkWhatsApp = (number: string, message: string) => {
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`
}

// Form submission handler
const submitForm = async () => {
  checkFields.value = true

  // Validate fields before sending the form
  validateName()
  validateEmail()
  validateMessage()

  if (!form.name.trim() || errors.emailError || !form.message.trim()) {
    errors.generalMessage = t('contact.error_general')
    isSuccess.value = false
    return
  }

  errors.generalMessage = ''
  waiting.value = true

  const newURL = window.location.protocol + '//' + window.location.host

  await $fetch(newURL + '/api/contact', {
    method: 'POST',
    body: {
      name: form.name,
      email: 'hello@djjaycam.com',
      subject: t('contact.mail_subject'),
      message: form.message + ' ++++ RECEIVED FROM ++++ ' + form.email,
    },
  }).then(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    errors.generalMessage = t('contact.sent_succesfully')
    errors.nameError = ''
    errors.emailError = ''
    errors.messageError = ''
    waiting.value = false
    checkFields.value = false
    isSuccess.value = true
  }).catch((error) => {
    console.error('Contact form error:', error)
    errors.generalMessage = error.data?.message || t('contact.error_general')
    isSuccess.value = false
    waiting.value = false
  })
}

// Watchers for real-time validation
watch(() => form.name, () => {
  if (checkFields.value) validateName()
})
watch(() => form.email, () => {
  if (checkFields.value) validateEmail()
})
watch(() => form.message, () => {
  if (checkFields.value) validateMessage()
})
</script>

  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 1em;
  }
  .loader-circle {
    border: 2px solid white;
    border-top: 2px solid transparent;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
