<template>
  <div class="bg-[var(--background-color)] text-[var(--text-primary)] min-h-screen">
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">Media Resources</h1>
          <p class="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Explore the breadth and depth of Rev. Okoroafor's teachings. Filter by content type or topic to find sermons, videos, and podcasts that speak to you.
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
            <button class="filter-button flex gap-1 inactive-filter">
              <Headphones class="w-4 h-4 mr-2" />
              Podcasts
            </button>
          </div>
          
          <div class="flex justify-center">
            <div class="relative w-full max-w-sm">
              <select class="w-full appearance-none rounded-full border border-gray-300 bg-white py-2 px-4 pr-8 text-sm text-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent">
                <option>Filter by Topic/Event</option>
                <option>The Power of Faith</option>
                <option>Living a Purposeful Life</option>
                <option>Grace Conference 2023</option>
                <option>Building Strong Relationships</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown class="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Sermon Card -->
          <div class="gallery-item flex flex-col gap-4 group bg-[var(--card-bg)] p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="relative overflow-hidden rounded-lg">
              <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105" 
                   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC43RDKzTCHiy9qFpNeS63n4gjsiTgWKoZuQ3nw9qaYt3KSXSsRl0V58QbZTEkHY-V7xyejT62r9QdxI2Ii-z0_2sAGTgSXjsneMJFF5znRr5hKGdS-RlxBoAvg7BFyqgPaxHMMv0vCmLd2FgUXXpEBAOfGxcqLsnCQCfUteoNdUBcTrMzuqeJ7mUW9LjghsLUYPVLGo-far3jUkINl8qItEBqv_DDkJEBsiuljCOqx5sH3z2hk9IBhSKwX-cDFfJi2QOKkHKY9s1w");'></div>
            </div>
            <div class="flex flex-col flex-grow">
              <p class="text-sm font-bold text-[var(--primary-color)] flex items-center">
                <Mic2 class="w-4 h-4 mr-1" /> SERMON
              </p>
              <h3 class="text-lg font-bold leading-tight mt-1 text-[var(--text-primary)] flex-grow">The Power of Faith</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-2">A foundational sermon on the transformative power of unwavering faith in God's promises.</p>
            </div>
          </div>
          
          <!-- Video Card -->
          <div class="gallery-item flex flex-col gap-4 group bg-[var(--card-bg)] p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="relative overflow-hidden rounded-lg">
              <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105" 
                   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFmBKaEfAO2na5LRfuqUNhRmpZ8wyLSyPS_xaetwKD2fU8KHteZyC_yYl4DjZVm7MkBqW1xix1iKsYVeKHKrCYWYCUYwr0c5F-EmiTGGNGDvwGsURerZPrpTJX3L-JVxbauz9Q_Uthvh5Agtwpnwnlt4wUi1WL7Zbx55dm-knhjvQMF2aZft0kyPyoYmNzHO7wjVMWFGVsRPGIxux-8vMmXjvrK2tDKAEnlDi9gUH7GPi7eL6amWJC5CakAZfs97nXbfpdzUJXvv4");'></div>
              <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button class="w-16 h-16 bg-[var(--primary-color)]/80 rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play class="w-8 h-8" />
                </button>
              </div>
            </div>
            <div class="flex flex-col flex-grow">
              <p class="text-sm font-bold text-[var(--primary-color)] flex items-center">
                <Video class="w-4 h-4 mr-1" /> VIDEO
              </p>
              <h3 class="text-lg font-bold leading-tight mt-1 text-[var(--text-primary)] flex-grow">Living a Purposeful Life</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-2">Discover how to align your daily actions with your divine purpose in this inspiring video message.</p>
            </div>
          </div>
          
          <!-- Podcast Card -->
          <div class="gallery-item flex flex-col gap-4 group bg-[var(--card-bg)] p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="relative overflow-hidden rounded-lg">
              <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105" 
                   style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8PqPLeJYWJPzKymQaDcJEXh6ojtmZNqtYwVuHWkAIWRM5CEXBBK8gU-6qSGt3I9ZBWubq7zu3j-6fbA0ClBIXP8_EedsCcpCzzk8JUzhCq5E30GMTuZnSDAp2VzJxZQcmZWC0jJaeBoGDKyff9UeRzuutDJ_ipq5qTnHgOWVi5OpScuj7U0Y9IW4nSuLDQe90i390AV_vT7faunYcwtXws8fewdvd-m566ptfrItfZ78-kMax-0flTGguf7YfugM-l1hGckLDoi4");'></div>
              <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button class="w-16 h-16 bg-[var(--primary-color)]/80 rounded-full flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play class="w-8 h-8" />
                </button>
              </div>
            </div>
            <div class="flex flex-col flex-grow">
              <p class="text-sm font-bold text-[var(--primary-color)] flex items-center">
                <Headphones class="w-4 h-4 mr-1" /> PODCAST
              </p>
              <h3 class="text-lg font-bold leading-tight mt-1 text-[var(--text-primary)] flex-grow">Overcoming Challenges</h3>
              <p class="text-sm text-[var(--text-secondary)] mt-2">Listen to practical, faith-based strategies for overcoming life's most difficult obstacles.</p>
            </div>
          </div>
          
          <!-- Additional cards would follow the same pattern -->
        </div>
        
        <div class="flex items-center justify-center mt-16">
          <button class="bg-[var(--primary-color)] text-white font-medium py-3 px-8 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center">
            <RefreshCw class="w-4 h-4 mr-2" />
            Load More
          </button>
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
  Headphones, 
  ChevronDown, 
  Play,
  RefreshCw 
} from 'lucide-vue-next';
</script>
