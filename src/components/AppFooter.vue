<script setup>
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3 class="text-lg font-bold text-white">Rev. Dr.Chidi Okoroafor</h3>
          <p class="mt-2 text-sm">Spreading the Gospel, empowering believers.</p>
          <div class="mt-4 flex space-x-4">
            <a class="text-gray-400 hover:text-white transition-colors" href="https://web.facebook.com/Chidiokoroafor13" target="_blank">
              <Facebook class="w-6 h-6" />
            </a>
            <a class="text-gray-400 hover:text-white transition-colors" target="_blank" href="https://www.youtube.com/@chidiokoroaformessages-kk9jwv">
              <Youtube class="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white">Quick Links</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><router-link to="/about" class="hover:text-white transition-colors">About</router-link></li>
            <li><router-link to="/ministries" class="hover:text-white transition-colors">Ministries</router-link></li>
            <li><router-link to="/media" class="hover:text-white transition-colors">Media</router-link></li>
            <li><router-link to="/events" class="hover:text-white transition-colors">Events</router-link></li>
            <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
          </ul>
        </div>
        <div class="lg:col-span-2">
          <h3 class="text-lg font-bold text-white">Subscribe to our Newsletter</h3>
          <p class="mt-2 text-sm">Get the latest news, articles, and resources delivered to your inbox.</p>
          <form class="mt-4 flex flex-col sm:flex-row gap-2">
            <input 
              class="w-full px-4 py-2 rounded-md bg-gray-700 text-white border-gray-600 focus:ring-primary focus:border-primary" 
              placeholder="Enter your email" 
              type="email"
            />
            <button 
              class="bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition-colors" 
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
        <p>© {{ new Date().getFullYear() }} Rev. Dr. Chidi Okoroafor Ministries. All rights reserved. | 
          <a class="underline hover:text-white" href="#">Privacy Policy</a> | 
          <a class="underline hover:text-white" href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</template>