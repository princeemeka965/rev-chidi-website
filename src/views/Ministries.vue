<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div class="mx-auto max-w-7xl">
        <!-- Hero Section with Animation -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6" style='font-family: "Noto Serif", serif;'>
            Our Ministries
          </h1>
          <p class="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 animate-slide-up">
            Explore the diverse ministries founded by Rev. Dr. Chidi Okoroafor, each transforming lives through the power of the Gospel and community development.
          </p>
        </div>
        
        <!-- Ministry Grid with Staggered Animations -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Global Outreach -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-100">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                   alt="Global Outreach" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <Globe class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Global Outreach</h2>
              </div>
              <p class="text-gray-600 mb-4">
                Taking the Gospel to nations through crusades, church planting, and leadership training across continents.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Current Focus:</span> Rural evangelism in West Africa through Chidi Okoroafor Revival Campaign
                </p>
              </div>
              <a href="#" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Learn more
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Community Development -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-200">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://res.cloudinary.com/campnet/image/upload/v1754592152/ChatGPT_Image_Aug_7_2025_07_42_13_PM_iy6we6.png" 
                   alt="Community Development" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <HandHeart class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Chidi Okoroafor Unique Heart Foundation (COUHF)</h2>
              </div>
              <p class="text-gray-600 mb-4">
                Empowering the indigent through education, healthcare, and vocational training programs.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Key Initiative:</span> Annual scholarship program for underprivileged students
                </p>
              </div>
              <a href="#" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Get involved
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Youth Empowerment -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-300">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://res.cloudinary.com/campnet/image/upload/v1754591517/ChatGPT_Image_Aug_7_2025_07_31_45_PM_bx1gqp.png" 
                   alt="Youth Empowerment" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <Users class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Youth Empowerment</h2>
              </div>
              <p class="text-gray-600 mb-4">
                Raising purpose-driven young leaders through conferences, mentorship, and leadership development programs.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Upcoming:</span> Annual Youth Summit at Revival Pavilion Assemblies of God, Enugu
                </p>
              </div>
              <a href="https://web.facebook.com/profile.php?id=61558964979817" target="_blank" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Explore programs
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Media Ministry -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-400">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                   alt="Media Ministry" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <Radio class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Moment of Revival</h2>
              </div>
              <p class="text-gray-600 mb-4">
                Online Global Service broadcasting life-changing messages through TV, podcasts, and social media platforms.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Now Streaming:</span> Weekly online services with live Q&A sessions
                </p>
              </div>
              <a href="https://web.facebook.com/watch/Chidiokoroafor13/" target="_blank" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Watch now
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Revival Pavilion -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-500">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://res.cloudinary.com/campnet/image/upload/v1754591109/ChatGPT_Image_Aug_7_2025_07_22_29_PM_rfmyfx.png" 
                   alt="Revival Pavilion" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <Church class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Revival Pavilion AG Enugu</h2>
              </div>
              <p class="text-gray-600 mb-4">
                A vibrant worship center committed to spiritual growth, community transformation, and raising disciples.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Weekly:</span> Power-packed services and Bible study sessions
                </p>
              </div>
              <a href="https://web.facebook.com/profile.php?id=61558964979817" target="_blank" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Visit us
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Revival Campaign -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-card-enter delay-600">
            <div class="h-48 bg-gray-200 overflow-hidden">
              <img src="https://res.cloudinary.com/campnet/image/upload/v1754591265/ChatGPT_Image_Aug_7_2025_07_27_31_PM_mdshgh.png" 
                   alt="Revival Campaign" 
                   class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 animate-icon-bounce">
                <Mic class="w-8 h-8 text-blue-600 mr-3" />
                <h2 class="text-2xl font-bold text-gray-900">Revival Campaign</h2>
              </div>
              <p class="text-gray-600 mb-4">
                Focused rural outreaches bringing hope, healing, and transformation to underserved communities.
              </p>
              <div class="bg-blue-50 p-3 rounded-lg mb-4 animate-pulse">
                <p class="text-sm text-blue-800 font-medium">
                  <span class="font-bold">Next Mission:</span> Medical outreach in Eastern Nigeria villages
                </p>
              </div>
              <a href="#" class="inline-flex items-center text-blue-600 font-medium group hover:underline">
                Join next campaign
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Globe, HandHeart, Users, Radio, ArrowRight, Church, Mic } from 'lucide-vue-next';
</script>

<style scoped>
/* Base transitions */
a, button, .ministry-card {
  transition: all 0.3s ease;
}

img {
  transition: transform 0.5s ease;
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-card-enter {
  animation: cardEnter 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}

.animate-icon-bounce {
  animation: iconBounce 1s ease infinite alternate;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes iconBounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .ministry-grid {
    grid-template-columns: 1fr;
  }
  
  .delay-100, .delay-200, .delay-300, 
  .delay-400, .delay-500, .delay-600 {
    animation-delay: 0.1s !important;
  }
}
</style>