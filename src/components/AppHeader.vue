<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, CircleUser, Gift } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-all duration-300 border-b" :class="{
    'bg-white/95 border-gray-200 shadow-sm': isScrolled || isMobileMenuOpen,
    'bg-white/80 border-transparent': !isScrolled && !isMobileMenuOpen
  }">
    <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 md:pt-5 pt-3"
      :class="isScrolled ? 'py-3' : ''">
      <router-link to="/" class="flex items-center gap-2 z-50" @click="closeAllMenus">
        <img
          src="https://res.cloudinary.com/campnet/image/upload/v1754573457/ChatGPT_Image_Aug_7_2025_02_25_38_PM_kiptse.png"
          class="w-7 h-7 rounded-full sm:w-8 sm:h-8 text-blue-600" />
        <h2 class="text-lg md:text-xl font-bold tracking-tight text-gray-900">
          Chidi Okoroafor Ministries
        </h2>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1">
        <router-link v-for="link in [
          { to: '/about', text: 'About' },
          { to: '/ministries', text: 'Ministries' },
          { to: '/events', text: 'Events' },
          { to: '/media', text: 'Media' },
          { to: '/contact', text: 'Contact' }
        ]" :key="link.to" :to="link.to"
          class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors rounded-lg"
          active-class="text-yellow-600 font-semibold bg-yellow-50"
          exact-active-class="text-yellow-600 font-semibold bg-yellow-50">
          {{ link.text }}
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <router-link to="/donate"
          class="hidden md:flex items-center justify-center rounded-lg h-10 px-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white text-sm font-semibold tracking-wide shadow-sm hover:from-black-700 hover:to-black-600 transition-all duration-300">
          <Gift class="w-4 h-4 mr-2" />
          Donate
        </router-link>
        <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-700" />
          <X v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu with Enhanced Animations -->
    <transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="isMobileMenuOpen" class="md:hidden fixed h-screen inset-0 bg-black/30 backdrop-blur-sm z-40"
        @click="closeAllMenus">
        <transition enter-active-class="transition-transform duration-300 ease-out" enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0" leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
          <div v-show="isMobileMenuOpen"
            class="relative bg-white h-full w-full pt-10 max-w-sm overflow-y-auto shadow-xl" @click.stop>
            <div class="flex flex-col space-y-1 px-4 py-6">
              <router-link v-for="item in [
                { to: '/', text: 'Home' },
                { to: '/about', text: 'About' },
                { to: '/ministries', text: 'Ministries' },
                { to: '/events', text: 'Events' },
                { to: '/media', text: 'Media' },
                { to: '/contact', text: 'Contact' }
              ]" :key="item.text" :to="item.to"
                class="px-4 py-3 text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                active-class="text-yellow-600 bg-yellow-50" @click="closeAllMenus">
                {{ item.text }}
              </router-link>

              <router-link to="/donate"
              @click="closeAllMenus"
                class="flex items-center justify-center mt-4 mx-4 py-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold shadow-sm hover:from-gray-700 hover:to-gray-600 transition-all duration-300">
                <Gift class="w-5 h-5 mr-2" />
                Make a Donation
              </router-link>

              <div class="mt-8 px-4 py-4 border-t border-gray-100">
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Connect With Us
                </h3>
                <div class="flex gap-4">
                  <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-red-600 transition-colors">
                    <span class="sr-only">YouTube</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </header>
</template>