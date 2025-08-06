<script setup>
import { ref } from 'vue'
import ContentCard from '../components/ContentCard.vue'

const heroVideo = ref(null)
const cards = [
  {
    title: "The Power of Forgiveness",
    description: "A powerful message on healing and reconciliation.",
    type: "Sermon",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhpe1wUwLgIrW5by17y4_lOS0eUBvVjcxZej0lVOsD3y-aL99Cx-WDfMh7vlqQ0Ob3-BuNdIHJZWGV1h3xEvOlqBxHrcCbo0oc8vwDKW2fZUYsG8JuQDbuXwHkx2odjk738n4dkPq3vRT1BWaPfnN62fgGKkvnfgygkjhA1_MJ-iy6jjbY6q3Lc33guLuh8k1ZLFR_PXK9ezURsVcNYr8s4GTzz1JlGOdpl9FCTMGNAU4JpbKeuZ0vFJIv-bexus2U141Pq7AC5VE",
    delay: 100
  },
  {
    title: "Annual Youth Conference",
    description: "Join us for a weekend of worship, fellowship, and growth.",
    type: "Upcoming Event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDewQM_WOzRhcFuvmpeXGwYwOya5AQQDUfIUpEHxDQIqrkuaTJiMbDDzSJrutNLKT4mq5MMPfBqLdos4P4VoeKbhzmsEVFjsiZtLTr3vL-2aCYAdkBAMNylWa9VAtJZ9vYcEv64z0CFm8jVvg4L4_MAzAWxBkmOqgh7VzOD7d_zg0VQvRAT0fszTnzLfgGC0pnhIhUlRXZUxtqIG1VugTKhUig6y7rVzRYm6KSU1S-vUkdnSVGLbGp4Pd-dXLlSm4CnNewDNbLjvQw",
    delay: 200
  },
  {
    title: "Living a Life of Purpose",
    description: "Discover God's plan for your life in this multi-part series.",
    type: "Sermon Series",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1czfBlCCxTjXl2qwqUO_Pbi2HnXsxif4pZwrjwIbWyefoyKCCxzE8C9UgcUUTCB_uwY4GOVvybgArxQ05DKMaYFHah9y0iQtyNRT5KWjICS1jKQU5rziFOZNeAV9CGFHTzNhCNT0BiFKXb-lBqiTS4sSildnhnefH-2RKizA_R0YlE2tGf475wNGPqDvQ0YwtEItix-9kHHgrAZ8QKVbXe5V_co0EOVCpEBlcIc3inCHJe7dHnpjwxut3quIhwwKZmdP_n-CjNns",
    delay: 300
  }
]
</script>

<template>
  <main>
    <section class="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video 
        ref="heroVideo"
        autoplay 
        loop 
        muted 
        class="absolute z-[-1] w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="https://res.cloudinary.com/campnet/video/upload/v1754422308/AQMDIQ1hxT5MYApxJAvs-TtOrhGYGwMv08ZyHCELciDsinRCZgg_HseSk3Re9-s4LJSGltSg0VK5mrhH9v8bxhgB_wp8djv.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 p-6 hero-text">
        <h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-md">
          Spreading the Word, Transforming Lives
        </h1>
        <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">
          Join Reverend Chidi Okoroafor on a journey of faith and spiritual awakening.
        </p>
        <div class="mt-8">
          <button class="rounded-full bg-white px-10 py-4 text-lg font-bold text-black transition-transform hover:scale-105 shadow-xl">
            Watch Now
          </button>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">Featured Content</h2>
          <p class="mt-2 text-lg text-text-light">Explore recent sermons and upcoming events.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentCard 
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :type="card.type"
            :image="card.image"
            :delay="card.delay"
          >
            {{ card.type === 'Sermon' ? 'Listen Now →' : card.type === 'Upcoming Event' ? 'Learn More →' : 'Explore Series →' }}
          </ContentCard>
        </div>
      </div>
    </section>
  </main>
</template>