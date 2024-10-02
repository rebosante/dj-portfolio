<template>
  <div class="video-wrapper">
    <h2>Video</h2>
    <iframe
      src="https://www.youtube.com/embed/your-video-id"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</template>

<script setup>
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (9/16 = 0.5625) */
  height: 0;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
  