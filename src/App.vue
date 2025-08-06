<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { onMounted } from 'vue'

// Add padding to body to account for fixed header
onMounted(() => {
  document.body.style.paddingTop = '62px' // Adjust this value to match your header height
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 md:pt-4"> <!-- Added pt-4 for some spacing below header -->
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Ensure proper spacing for anchor links */
:target {
  scroll-margin-top: 80px; /* Slightly more than header height */
}
</style>