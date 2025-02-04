<template>
<p class="text-base typewriter mb-6" v-typewriter v-html="randomText" />
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  
  // Define props
  const props = defineProps({
    texts: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0, // Ensure the array is not empty
    },
  });
  
  // Reactive state for the random text
  const randomText = ref('');
  
  // Function to get a random text from the array
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * props.texts.length);
    return props.texts[randomIndex];
  };
  
  // On mounted lifecycle hook, set the random text
  onMounted(() => {
    randomText.value = getRandomText();
  });
</script>