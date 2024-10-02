<template>
    <div class="p-4">
      <!-- form @submit.prevent="submitForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </!-->
      <div class="grid sm:grid-cols-2 items-start gap-16 mx-auto max-w-4xl font-[sans-serif]">
            <div>
                <h1 class="text-3xl font-extrabold">{{ $t('home.contact') }}</h1>
                <p class="text-sm mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

                <div class="mt-12">
                    <h2 class="text-base font-bold">Email</h2>
                    <ul class="mt-4">
                        <li class="flex items-center">
                            <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" class="text-[#007bff] text-sm ml-4">
                                <small class="block">Mail</small>
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <form @submit.prevent="submitForm" class="ml-auto space-y-4">
              <input v-model.trim="form.name" type="text" id="contact_name" name="contact_name" class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500 focus:bg-transparent" placeholder="Name" />
                <span v-if="errors.nameError" class="error">{{ errors.nameError }}</span>
              <input v-model.trim="form.email" type="email" id="contact_email" name="contact_email" class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500 focus:bg-transparent" placeholder="Email" />
                <span v-if="errors.emailError" class="error">{{ errors.emailError }}</span>
              <textarea v-model.trim="form.message" rows="5" id="contact_message" name="contact_message" class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500 focus:bg-transparent" placeholder="Message"></textarea>
                  <span v-if="errors.messageError" class="error">{{ errors.messageError }}</span>
                  <br v-if="errors.generalMessage" />
                  <span v-if="errors.generalMessage" class="error">{{ errors.generalMessage }}</span>
              <button type="submit" class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">{{ t('send') }}</button>
            </form>
        </div>
        <div><a :href="getLinkWhatsApp('+34655834612', t('contact.message_whatsapp'))" target="_blank">Whatsapp</a></div>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref, reactive, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const errors = reactive({
  nameError: '',
  emailError: '',
  messageError: '',
  generalMessage: '',
});

const waiting = ref(false);
const checkFields = ref(false);

// Function to validate the name
const validateName = () => {
  errors.nameError = !form.name.trim() ? 'Name is required' : '';
};

// Function to validate the email
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.emailError = !emailRegex.test(form.email) ? 'Please enter a valid email address' : '';
};

// Function to validate the message
const validateMessage = () => {
  errors.messageError = !form.message.trim() ? 'Message is required' : '';
};

// Function to get WhatsApp link
const getLinkWhatsApp = (number: string, message: string) => {
  return `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
};

// Form submission handler
const submitForm = async () => {
  checkFields.value = true;

  // Validate fields before sending the form
  validateName();
  validateEmail();
  validateMessage();

  if (!form.name.trim() || errors.emailError || !form.message.trim()) {
    errors.generalMessage = 'Please fill all fields';
    return;
  }
  errors.generalMessage = '';

  waiting.value = true;
  const newURL = window.location.protocol + '//' + window.location.host;

  await $fetch(newURL + '/api/contact', {
    method: 'POST',
    body: {
      name: form.name,
      email: 'info@osteorevolucion.com',
      subject: t('contact.mail_subject'),
      message: form.message + ' ++++ RECEIVED FROM ++++ ' + form.email,
    },
  }).then(() => {
    checkFields.value = false;
    form.name = '';
    form.email = '';
    form.message = '';
    errors.generalMessage = t('contact.sent_succesfully');
    waiting.value = false;
  });
};

// Watchers for real-time validation
watch(() => form.name, validateName);
watch(() => form.email, validateEmail);
watch(() => form.message, validateMessage);
</script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  