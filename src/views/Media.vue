<template>
  <div class="bg-[var(--background-color)] text-[var(--text-primary)] min-h-screen">
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">Media Resources</h1>
          <p class="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Explore the breadth and depth of Rev. Okoroafor's teachings. Filter by content type or topic to find
            sermons, videos, and podcasts that speak to you.
          </p>
        </div>

        <div class="mb-10">
          <div class="flex flex-wrap justify-center gap-4 mb-6">
            <button class="filter-button flex gap-1 active-filter">
              <List class="w-4 h-4 mr-2" />
              All
            </button>
            <button class="filter-button flex gap-1 inactive-filter">
              <Mic2 class="w-4 h-4 mr-2" />
              Sermons
            </button>
            <button class="filter-button flex gap-1 inactive-filter">
              <Video class="w-4 h-4 mr-2" />
              Videos
            </button>
          </div>

          <div class="flex justify-center">
            <div class="relative w-full max-w-sm">
              <input placeholder="Search for a message"
                class="w-full appearance-none rounded-full border border-gray-300 bg-white py-2 px-4 pr-8 text-sm text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-secondary-color)] focus:border-transparent" />
            </div>
          </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentCard v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"
            :type="card.type" :image="card.image" :frame="card.frameSrc" :delay="card.delay" :badge="card.badge">
            <a :href="card.link" target="_blank"
              class="flex items-center justify-center px-3 py-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold shadow-sm hover:from-gray-700 hover:to-gray-600 transition-all duration-300">
              {{ card.type === 'Teaching Series' ? 'Start Watching →' :
                card.type === 'Conference' ? 'Register Now →' :
                  'Download Now →' }}
            </a>
          </ContentCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  List,
  Mic2,
  Video,
} from 'lucide-vue-next';
import ContentCard from '../components/ContentCard.vue'

const cards = [
  {
    title: "Wanted! Wanted!! Wanted!!!",
    description: "Rev. Dr. Chidi Okoroafor's latest teaching series on the call to intercession.",
    type: "Teaching Series",
    image: "https://res.cloudinary.com/campnet/image/upload/v1754575295/hqdefault_shfhtd.avif",
    delay: 100,
    link: 'https://youtu.be/Ft7fuZlUfLE?si=sUQ7ojiH0OE6TK-L',
  },
  {
    title: "Passion for Souls",
    description: "Rev. Dr. Chidi Okoroafor's heartfelt message on the importance of soul winning.",
    type: "Teaching Series",
    image: "",
    frameSrc: "https://www.youtube.com/embed/uoVqHMqD9oM?si=cm_Vnt_q0gNDNvqf",
    link: "https://www.youtube.com/embed/uoVqHMqD9oM?si=cm_Vnt_q0gNDNvqf",
    delay: 200,
  },
  {
    title: "Rachael What are you sitting on?",
    description: "Rev. Dr. Chidi Okoroafor's insightful message",
    type: "Teaching Series",
    image: "",
    frameSrc: "https://www.youtube.com/embed/NmNwTh8m9RU?si=7YSydmvm3y_ALhdC",
    link: "https://www.youtube.com/embed/NmNwTh8m9RU?si=7YSydmvm3y_ALhdC",
    delay: 200,
  },
]

</script>
