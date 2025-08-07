<script setup>
import { ref, onMounted } from 'vue'
import ContentCard from '../components/ContentCard.vue'

const heroVideo = ref(null)
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

// Adjust video height for mobile
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      heroVideo.value.style.height = '60vh'
    } else {
      heroVideo.value.style.height = '100vh'
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize() // Initial call
})
</script>

<template>
  <main class="bg-white">
    <!-- Hero Section with Adjusted Height -->
    <section
      class="relative h-[60vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video ref="heroVideo" autoplay loop muted playsinline
        class="absolute z-[1] w-auto min-w-full min-h-full max-w-none object-cover">
        <source
          src="https://res.cloudinary.com/campnet/video/upload/v1754422308/AQMDIQ1hxT5MYApxJAvs-TtOrhGYGwMv08ZyHCELciDsinRCZgg_HseSk3Re9-s4LJSGltSg0VK5mrhH9v8bxhgB_wp8djv.mp4"
          type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 to-black/40"></div>

      <div class="relative z-10 px-6 w-full max-w-6xl mx-auto">
        <div class="text-center mb-6">
          <span class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            Isaiah 62:6 - "I have posted watchmen on your walls, Jerusalem"
          </span>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
            Spreading the Word, Transforming Lives
          </h1>
          <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Join Reverend Chidi Okoroafor on a journey of faith and spiritual awakening.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            class="rounded-full bg-white px-8 py-3 text-lg font-bold text-blue-800 transition-all hover:scale-105 shadow-xl hover:bg-blue-50">
            Watch Live Services →
          </button>
          <button
            class="rounded-full bg-transparent border-2 border-white px-8 py-3 text-lg font-bold text-white transition-all hover:scale-105 shadow-xl hover:bg-white/10">
            Prayer Requests
          </button>
        </div>
      </div>
    </section>

    <!-- Ministry Highlights -->
    <section class="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold">Global Prayer Movement</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">Ministry Resources</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Equipping the saints for end-time revival and spiritual warfare
          </p>
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
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold">Upcoming Gatherings</h2>
          <p class="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Join us for these life-changing encounters with God
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <div class="text-blue-300 font-medium">June 15-17, 2023</div>
            <h3 class="text-xl font-bold mt-2">School of the Prophets</h3>
            <p class="mt-2 text-blue-100">3-day intensive training in prophetic ministry</p>
            <button class="mt-4 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition">
              More Details
            </button>
          </div>

          <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <div class="text-blue-300 font-medium">Every Friday</div>
            <h3 class="text-xl font-bold mt-2">Night of Divine Encounter</h3>
            <p class="mt-2 text-blue-100">Weekly prayer meeting for breakthroughs</p>
            <button class="mt-4 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition">
              Join Online
            </button>
          </div>

          <div class="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <div class="text-blue-300 font-medium">December 5-10, 2023</div>
            <h3 class="text-xl font-bold mt-2">International Prayer Conference</h3>
            <p class="mt-2 text-blue-100">Global gathering of intercessors and ministers</p>
            <button class="mt-4 px-6 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition">
              Early Registration
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonies Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-blue-600 font-semibold">Transformed Lives</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">Recent Testimonies</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                JD</div>
              <div>
                <h4 class="font-bold">John D.</h4>
                <div class="text-sm text-gray-500">Lagos, Nigeria</div>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "After attending the School of Prophets, I received clarity on my calling and have seen God move
              powerfully through simple obedience to His voice."
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                AS</div>
              <div>
                <h4 class="font-bold">Amina S.</h4>
                <div class="text-sm text-gray-500">Nairobi, Kenya</div>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "The 40-day prayer guide transformed my prayer life. I've witnessed miraculous answers to prayers I never
              thought possible."
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-text {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
</style>