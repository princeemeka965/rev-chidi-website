<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, CircleUser } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Cleanup on unmount
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300"
    :class="{
      'bg-white/95 shadow-md': isScrolled || isMobileMenuOpen,
      'bg-white/80': !isScrolled && !isMobileMenuOpen
    }"
  >
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      <router-link to="/" class="flex items-center gap-3 z-50">
        <CircleUser class="w-8 h-8 text-blue-500" />
        <h2 class="text-xl font-bold tracking-tight">Rev. Chidi Okoroafor</h2>
      </router-link>

      <nav class="hidden md:flex items-center gap-8">
        <router-link 
          to="/about" 
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          active-class="text-blue-500 font-semibold"
        >
          About
        </router-link>
        <router-link 
          to="/ministries" 
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          active-class="text-blue-500 font-semibold"
        >
          Ministries
        </router-link>
        <router-link 
          to="/events" 
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          active-class="text-blue-500 font-semibold"
        >
          Events
        </router-link>
        <router-link 
          to="/media" 
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          active-class="text-blue-500 font-semibold"
        >
          Media
        </router-link>
        <router-link 
          to="/contact" 
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          active-class="text-blue-500 font-semibold"
        >
          Contact
        </router-link>
      </nav>

      <div class="flex items-center gap-4">
        <button
          class="hidden md:flex min-w-[90px] items-center justify-center rounded-md h-10 px-5 bg-blue-500 text-white text-sm font-bold tracking-wide shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Give
        </button>
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors z-50"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="md:hidden absolute inset-0 bg-white h-screen w-full backdrop-blur-sm transition-all duration-300 ease-in-out pt-20"
      :class="{
        'translate-x-0': isMobileMenuOpen,
        '-translate-x-full': !isMobileMenuOpen
      }"
    >
      <div class="flex flex-col bg-white space-y-6 px-6 py-8">
        <router-link 
          to="/about" 
          class="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
          active-class="text-blue-500 font-semibold"
          @click="toggleMobileMenu"
        >
          About
        </router-link>
        <router-link 
          to="/ministries" 
          class="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
          active-class="text-blue-500 font-semibold"
          @click="toggleMobileMenu"
        >
          Ministries
        </router-link>
        <router-link 
          to="/events" 
          class="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
          active-class="text-blue-500 font-semibold"
          @click="toggleMobileMenu"
        >
          Events
        </router-link>
        <router-link 
          to="/media" 
          class="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
          active-class="text-blue-500 font-semibold"
          @click="toggleMobileMenu"
        >
          Media
        </router-link>
        <router-link 
          to="/contact" 
          class="text-lg font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
          active-class="text-blue-500 font-semibold"
          @click="toggleMobileMenu"
        >
          Contact
        </router-link>
        <button
          class="w-full flex items-center justify-center rounded-md h-12 bg-blue-500 text-white text-base font-bold tracking-wide shadow-md hover:bg-blue-600 transition-colors duration-300 mt-4"
          @click="toggleMobileMenu"
        >
          Give
        </button>
      </div>
    </div>
  </header>
</template>