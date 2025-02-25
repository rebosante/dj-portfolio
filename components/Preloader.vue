<template>
    <div class="preloader">
        <div class="spinner"></div>
    </div>
</template>

<script setup></script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-left-color: #e6b411;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>