<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section with Animation -->
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Upcoming Events
          </h2>
          <p class="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Join us for powerful crusades, transformative conferences, and spirit-filled gatherings
          </p>
        </div>

        <!-- Calendar Section -->
        <div class="flex flex-col lg:flex-row gap-8 items-start">
          <!-- Calendar Card -->
          <div class="w-full lg:w-96 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <!-- Month Navigation -->
            <div class="flex items-center justify-between p-4 border-b">
              <button 
                class="p-2 rounded-full hover:bg-gray-100 transition-colors"
                @click="prevMonth"
                aria-label="Previous month"
              >
                <ChevronLeft class="w-5 h-5 text-gray-700" />
              </button>
              <h3 class="text-xl font-bold text-gray-900 font-serif">
                {{ currentMonthName }} {{ currentYear }}
              </h3>
              <button 
                class="p-2 rounded-full hover:bg-gray-100 transition-colors"
                @click="nextMonth"
                aria-label="Next month"
              >
                <ChevronRight class="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <!-- Days of Week Header -->
            <div class="grid grid-cols-7 gap-1 px-4 pt-4">
              <div 
                v-for="day in daysOfWeek" 
                :key="day"
                class="text-xs font-medium text-gray-500 text-center pb-2"
              >
                {{ day }}
              </div>
            </div>

            <!-- Calendar Days Grid -->
            <div class="grid grid-cols-7 gap-1 p-4">
              <!-- Empty cells for days before the 1st -->
              <div 
                v-for="n in startDay" 
                :key="'empty-' + n"
                class="aspect-square"
              ></div>
              
              <!-- Days of the month -->
              <button
                v-for="day in daysInMonth"
                :key="day"
                class="aspect-square flex flex-col items-center justify-center rounded-lg transition-all duration-200 relative group"
                :class="{
                  'text-gray-900 hover:bg-gray-100': !isSelectedDay(day) && !isEventDay(day),
                  'text-white bg-blue-600 shadow-md': isSelectedDay(day),
                  'text-blue-700 font-bold': isEventDay(day) && !isSelectedDay(day),
                  'ring-2 ring-blue-400': isToday(day) && !isSelectedDay(day),
                  'scale-105': hoveredDay === day
                }"
                @mouseenter="hoveredDay = day"
                @mouseleave="hoveredDay = null"
                @click="selectDay(day)"
                :aria-label="`View events for ${currentMonthName} ${day}, ${currentYear}`"
              >
                <span class="text-sm">{{ day }}</span>
                <!-- Event indicator dot -->
                <span 
                  v-if="isEventDay(day)"
                  class="absolute bottom-2 h-2 w-2 rounded-full transition-all"
                  :class="{
                    'bg-white': isSelectedDay(day),
                    'bg-blue-600 animate-pulse': !isSelectedDay(day)
                  }"
                ></span>
                <!-- Today indicator -->
                <span 
                  v-if="isToday(day) && !isSelectedDay(day)"
                  class="absolute bottom-1 h-1 w-1 rounded-full bg-blue-400"
                ></span>
              </button>
            </div>
          </div>

          <!-- Events Panel -->
          <div class="flex-1 w-full">
            <!-- Selected Date Header -->
            <div 
              v-if="selectedDay"
              class="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-500"
              :class="{
                'opacity-0 translate-y-4': !showEventDetails,
                'opacity-100 translate-y-0': showEventDetails
              }"
            >
              <div class="p-6 border-b">
                <h3 class="text-2xl font-bold text-gray-900 font-serif">
                  Events on {{ formatSelectedDate() }}
                </h3>
                <p class="text-gray-600 mt-1">
                  {{ selectedDayEvents.length }} event{{ selectedDayEvents.length !== 1 ? 's' : '' }}
                </p>
              </div>
            </div>

            <!-- Events List -->
            <div 
              v-if="selectedDayEvents.length > 0"
              class="space-y-4 transition-all duration-500"
              :class="{
                'opacity-0 translate-y-4': !showEventDetails,
                'opacity-100 translate-y-0': showEventDetails
              }"
            >
              <div 
                v-for="(event, index) in selectedDayEvents"
                :key="event.id"
                class="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                :style="`transition-delay: ${index * 50}ms`"
              >
                <!-- Event Image -->
                <div class="h-48 bg-gray-200 overflow-hidden relative">
                  <img 
                    :src="event.image" 
                    :alt="event.title"
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div class="absolute bottom-4 left-4">
                    <span class="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                      {{ eventTypeLabel(event.type) }}
                    </span>
                  </div>
                </div>

                <!-- Event Details -->
                <div class="p-6">
                  <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold text-gray-900 font-serif">{{ event.title }}</h3>
                    <div class="text-sm text-gray-500">
                      {{ formatTime(event.startDate) }}
                      <span v-if="event.endDate"> - {{ formatTime(event.endDate) }}</span>
                    </div>
                  </div>
                  
                  <p class="text-gray-600 mb-4">{{ event.description }}</p>
                  
                  <div class="flex items-center text-gray-600">
                    <MapPin class="h-4 w-4 mr-2 flex-shrink-0" />
                    <span class="text-sm">{{ event.location }}</span>
                  </div>
                </div>

                <!-- Event CTA -->
                <div class="px-6 pb-6">
                  <a 
                    :href="event.link || '#'"
                    target="_blank"
                    class="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                    <ArrowRight class="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <!-- No Events Message -->
            <div 
              v-if="selectedDayEvents.length === 0 && selectedDay"
              class="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-500"
              :class="{
                'opacity-0 translate-y-4': !showEventDetails,
                'opacity-100 translate-y-0': showEventDetails
              }"
            >
              <CalendarX class="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 class="text-xl font-bold text-gray-900 mb-2 font-serif">No Events Scheduled</h3>
              <p class="text-gray-600">
                There are no events scheduled for {{ formatSelectedDate() }}.<br>
                Check back later or browse other dates.
              </p>
            </div>

            <!-- Upcoming Highlights -->
            <div 
              v-if="!selectedDay"
              class="bg-white rounded-xl shadow-lg p-6 animate-fade-in"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">Upcoming Highlights</h3>
              <div class="space-y-4">
                <div 
                  v-for="event in upcomingHighlightEvents"
                  :key="event.id"
                  class="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  @click="navigateToEventDate(event)"
                >
                  <div class="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span class="text-blue-600 font-bold text-lg">
                      {{ formatDay(event.startDate) }}
                    </span>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">{{ event.title }}</h4>
                    <p class="text-sm text-gray-500 mt-1">
                      {{ formatTime(event.startDate) }}
                      <span v-if="event.endDate"> - {{ formatTime(event.endDate) }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  ArrowRight,
  CalendarX
} from 'lucide-vue-next'

// Calendar state
const hoveredDay = ref(null)
const selectedDay = ref(null)
const showEventDetails = ref(false)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

// Sample events data with Gospel-inspired images
const events = ref([
  {
    id: 1,
    title: 'Holy Ghost Crusade',
    type: 'crusade',
    startDate: new Date(2025, 6, 12, 18, 0),
    endDate: new Date(2025, 6, 14, 21, 0),
    description: 'Experience the power of God in this 3-day crusade with miracles, healings, and deliverance. Join thousands of believers as we worship and pray together.',
    location: 'National Stadium, Lagos, Nigeria',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/crusade_audience_praising_god.jpg',
    link: 'https://example.com/crusade-registration'
  },
  {
    id: 2,
    title: 'Morning Devotion',
    type: 'prayer',
    startDate: new Date(2025, 6, 12, 7, 0),
    endDate: new Date(2025, 6, 12, 8, 0),
    description: 'Start your day with powerful prayers and biblical teaching. This online session will equip you spiritually for the day ahead.',
    location: 'Online Zoom Meeting',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/prayer_meeting.jpg',
    link: 'https://example.com/prayer-zoom'
  },
  {
    id: 3,
    title: 'Kingdom Youth Conference',
    type: 'conference',
    startDate: new Date(2025, 6, 20, 9, 0),
    endDate: new Date(2025, 6, 22, 17, 0),
    description: 'A transformative conference designed to empower young believers with biblical principles for success, purpose discovery, and leadership development.',
    location: 'Faith Convention Center, Abuja, Nigeria',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/youth_conference_worship.jpg',
    link: 'https://example.com/youth-conference'
  },
  {
    id: 4,
    title: 'Gospel TV Interview',
    type: 'media',
    startDate: new Date(2025, 6, 4, 20, 0),
    description: 'Live interview discussing contemporary issues from a biblical perspective and sharing insights on spiritual growth.',
    location: 'Heavenly Voices TV Network',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/tv_interview.jpg',
    link: 'https://example.com/tv-schedule'
  },
  {
    id: 5,
    title: 'Healing Service',
    type: 'crusade',
    startDate: new Date(2025, 6, 28, 17, 0),
    endDate: new Date(2025, 6, 28, 20, 0),
    description: 'Special service focused on divine healing and miracles. Come expecting your breakthrough!',
    location: 'Revival Pavilion AG, Enugu, Nigeria',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/healing_service.jpg',
    link: 'https://example.com/healing-service'
  },
  {
    id: 6,
    title: 'Holy Ghost Crusade',
    type: 'crusade',
    startDate: new Date(2025, 8, 15, 18, 0),
    endDate: new Date(2025, 8, 15, 21, 0),
    description: 'Experience the power of God in this 3-day crusade with miracles, healings, and deliverance. Join thousands of believers as we worship and pray together.',
    location: 'National Stadium, Lagos, Nigeria',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/crusade_audience_praising_god.jpg',
    link: 'https://example.com/crusade-registration'
  },
  {
    id: 7,
    title: 'Healing Service',
    type: 'crusade',
    startDate: new Date(2025, 8, 28, 17, 0),
    endDate: new Date(2025, 8, 28, 20, 0),
    description: 'Special service focused on divine healing and miracles. Come expecting your breakthrough!',
    location: 'Revival Pavilion AG, Enugu, Nigeria',
    image: 'https://res.cloudinary.com/campnet/image/upload/v1754656784/healing_service.jpg',
    link: 'https://example.com/healing-service'
  },
])

// Calendar calculations
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long' })
})

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const startDay = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

// Event helpers
const getEventCount = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day)
  return events.value.filter(event => 
    isEventOnDate(event, date)
  ).length
}

const isEventOnDate = (event, date) => {
  const eventStart = new Date(event.startDate)
  const eventEnd = event.endDate ? new Date(event.endDate) : eventStart
  
  // Normalize dates to midnight for comparison
  const compareDate = new Date(date)
  compareDate.setHours(0, 0, 0, 0)
  
  const normEventStart = new Date(eventStart)
  normEventStart.setHours(0, 0, 0, 0)
  
  const normEventEnd = new Date(eventEnd)
  normEventEnd.setHours(0, 0, 0, 0)
  
  return compareDate >= normEventStart && compareDate <= normEventEnd
}

const isEventDay = (day) => {
  return getEventCount(day) > 0
}

const isToday = (day) => {
  const today = new Date()
  return day === today.getDate() && 
         currentMonth.value === today.getMonth() && 
         currentYear.value === today.getFullYear()
}

const isSelectedDay = (day) => {
  if (!selectedDay.value) return false
  return day === selectedDay.value
}

const selectedDayEvents = computed(() => {
  if (!selectedDay.value) return []
  const date = new Date(currentYear.value, currentMonth.value, selectedDay.value)
  return events.value.filter(event => 
    isEventOnDate(event, date)
  ).sort((a, b) => a.startDate - b.startDate)
})

const upcomingHighlightEvents = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return events.value
    .filter(event => new Date(event.startDate) >= today)
    .sort((a, b) => a.startDate - b.startDate)
    .slice(0, 3)
})

const eventTypeLabel = (type) => {
  const labels = {
    crusade: 'Crusade',
    conference: 'Conference',
    media: 'Media',
    prayer: 'Prayer'
  }
  return labels[type] || type
}

const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
}

const formatDay = (date) => {
  return date.getDate()
}

const formatSelectedDate = () => {
  if (!selectedDay.value) return ''
  const date = new Date(currentYear.value, currentMonth.value, selectedDay.value)
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

// Calendar navigation
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  resetSelection()
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  resetSelection()
}

const selectDay = (day) => {
  if (selectedDay.value === day) {
    // Toggle if clicking the same day
    showEventDetails.value = !showEventDetails.value
  } else {
    // Select new day
    selectedDay.value = day
    showEventDetails.value = true
  }
}

const resetSelection = () => {
  selectedDay.value = null
  showEventDetails.value = false
}

const navigateToEventDate = (event) => {
  const eventDate = new Date(event.startDate)
  currentMonth.value = eventDate.getMonth()
  currentYear.value = eventDate.getFullYear()
  selectedDay.value = eventDate.getDate()
  showEventDetails.value = true
  
  // Smooth scroll to events section
  nextTick(() => {
    const element = document.querySelector('.events-panel')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

// Initialize with today's date if it has events
onMounted(() => {
  const today = new Date()
  const todayDay = today.getDate()
  
  if (isEventDay(todayDay)) {
    selectedDay.value = todayDay
    showEventDetails.value = true
  }
})
</script>

<style scoped>
/* Animation Classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
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

/* Responsive adjustments */
@media (max-width: 1023px) {
  .calendar-card {
    width: 100%;
  }
  
  .events-panel {
    margin-top: 1.5rem;
  }
}

/* Hover effects */
.event-card:hover {
  transform: translateY(-2px);
}
</style>