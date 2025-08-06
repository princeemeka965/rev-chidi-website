<template>
  <div class="bg-[var(--background-color)] min-h-screen">
    <main class="px-4 md:px-10 lg:px-20 xl:px-40 py-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-[var(--text-primary)] tracking-tight text-3xl md:text-5xl font-bold leading-tight font-serif">
            Upcoming Events
          </h2>
          <p class="text-[var(--text-secondary)] mt-2 text-lg">
            Join us for crusades, speaking engagements, and media appearances.
          </p>
        </div>

        <!-- Calendar Section -->
        <div class="flex flex-col items-center gap-8">
          <div class="flex flex-col gap-6 w-full max-w-2xl">
            <div class="flex min-w-72 flex-1 flex-col bg-white p-6 rounded-xl shadow-md">
              <!-- Month Navigation -->
              <div class="flex items-center justify-between pb-4">
                <button 
                  class="p-2 rounded-full hover:bg-[var(--secondary-color)] transition-colors"
                  @click="prevMonth"
                >
                  <ChevronLeft class="w-5 h-5" />
                </button>
                <h3 class="text-[var(--text-primary)] text-xl font-bold leading-tight font-serif">
                  {{ currentMonthName }} {{ currentYear }}
                </h3>
                <button 
                  class="p-2 rounded-full hover:bg-[var(--secondary-color)] transition-colors"
                  @click="nextMonth"
                >
                  <ChevronRight class="w-5 h-5" />
                </button>
              </div>

              <!-- Days of Week Header -->
              <div class="grid grid-cols-7 gap-1 text-center mb-2">
                <p 
                  v-for="day in daysOfWeek" 
                  :key="day"
                  class="text-[var(--text-secondary)] text-xs font-bold uppercase py-2"
                >
                  {{ day }}
                </p>
              </div>

              <!-- Calendar Days -->
              <div class="grid grid-cols-7 gap-1 text-center">
                <div 
                  v-for="n in startDay" 
                  :key="'empty-' + n"
                  class="h-12 w-full"
                ></div>
                
                <button 
                  v-for="day in daysInMonth" 
                  :key="day"
                  class="h-12 w-full flex flex-col items-center justify-center rounded-lg transition-all duration-200 relative group"
                  :class="{
                    'text-[var(--text-primary)] hover:bg-[var(--secondary-color)]': !isSelectedDay(day) && !isEventDay(day),
                    'text-white bg-[var(--primary-color)] shadow-md': isSelectedDay(day),
                    'text-[var(--primary-color)] font-bold': isEventDay(day) && !isSelectedDay(day),
                    'ring-2 ring-blue-500': isToday(day) && !isSelectedDay(day),
                    'scale-105': hoveredDay === day
                  }"
                  @mouseenter="hoveredDay = day"
                  @mouseleave="hoveredDay = null"
                  @click="toggleDay(day)"
                >
                  <span class="text-sm">{{ day }}</span>
                  <span 
                    v-if="isEventDay(day)"
                    class="absolute bottom-1 h-2 w-2 rounded-full transition-all"
                    :class="{
                      'bg-white': isSelectedDay(day),
                      'bg-[var(--primary-color)] animate-pulse': !isSelectedDay(day)
                    }"
                  ></span>
                  <span 
                    v-if="isEventDay(day) && !isSelectedDay(day)"
                    class="absolute -bottom-1 opacity-0 group-hover:opacity-100 group-hover:-bottom-2 transition-all duration-300 text-[10px] font-medium text-[var(--primary-color)]"
                  >
                    {{ getEventCount(day) }} event{{ getEventCount(day) > 1 ? 's' : '' }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Event Dropdown Section -->
          <div 
            class="w-full max-w-4xl transition-all duration-500 overflow-hidden"
            :class="{
              'max-h-0': !showEventDetails,
              'max-h-[800px]': showEventDetails
            }"
            v-if="selectedDayEvents.length > 0"
          >
            <div class="bg-white rounded-xl shadow-md border border-[var(--secondary-color)]">
              <div 
                v-for="(event, index) in selectedDayEvents" 
                :key="event.id"
                class="border-b border-[var(--secondary-color)] last:border-b-0"
                :class="{
                  'opacity-0 translate-y-4': !showEventDetails,
                  'opacity-100 translate-y-0': showEventDetails,
                  'transition-delay-100': index === 0,
                  'transition-delay-200': index === 1,
                  'transition-delay-300': index === 2
                }"
              >
                <div class="p-6">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-[var(--text-primary)] text-xl font-bold font-serif">{{ event.title }}</h3>
                      <p class="text-[var(--text-secondary)] mt-1 text-sm">
                        {{ formatTime(event.startDate) }}
                        <span v-if="event.endDate"> - {{ formatTime(event.endDate) }}</span>
                      </p>
                    </div>
                    <span class="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      {{ eventTypeLabel(event.type) }}
                    </span>
                  </div>
                  <p class="text-[var(--text-secondary)] mt-3 text-sm">{{ event.description }}</p>
                  <div class="flex items-center mt-3 gap-2 text-[var(--text-secondary)]">
                    <MapPin class="h-4 w-4 flex-shrink-0" />
                    <span class="text-sm">{{ event.location }}</span>
                  </div>
                </div>
                <div 
                  v-if="event.image"
                  class="h-92 bg-[var(--secondary-color)] relative overflow-hidden"
                >
                  <img 
                    :alt="event.title" 
                    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    :src="event.image"
                  />
                </div>
                <div class="p-4 bg-gray-50">
                  <button 
                    class="w-full flex items-center justify-center gap-2 rounded-md h-10 px-4 bg-[var(--primary-color)] text-white text-sm font-bold transition-all hover:scale-[1.02]"
                  >
                    <ArrowRight class="w-3 h-3" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- No Event Message -->
          <div 
            v-if="selectedDayEvents.length === 0 && showEventDetails"
            class="w-full max-w-4xl text-center py-8 text-[var(--text-secondary)] bg-white rounded-xl shadow-md border border-[var(--secondary-color)] transition-all duration-500"
          >
            <CalendarX class="w-10 h-10 mx-auto mb-3 text-[var(--primary-color)]" />
            <p class="text-base">No events scheduled for this date</p>
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

// Sample events data (updated for 2025)
const events = ref([
  {
    id: 1,
    title: 'Lagos Crusade',
    type: 'crusade',
    startDate: new Date(2025, 6, 12, 18, 0),
    endDate: new Date(2025, 6, 14, 21, 0),
    description: 'Join us for a powerful 3-day crusade in the heart of Lagos. Experience miracles, healing, and a mighty move of God.',
    location: 'National Stadium, Surulere, Lagos, Nigeria',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOJehhmZsGs2xd66Dojg19Wib0mH0OV1YR_J8I1JPGBrP6WvQCHUICEA9z2jh_pnN-RruP0bcgXeYYmRwcf2yCB9iAWq7lE57wIvU7A-RCgYI3n9jBlia_pwpz0xTGOELAaecmUQsmrmxHBoDgGo_Q5cKtbnDRfCsIvricogeNxM_RL2nA8iNda5N89-__hZ8nDhjlx3G7Qb8NtVMJG2gjoh0T1Ebjrj9upGjsO1QOx0TkAbQt3C3yxq2V7IGzmewxxUC0DUW3V6A'
  },
  {
    id: 2,
    title: 'Morning Prayer Session',
    type: 'prayer',
    startDate: new Date(2025, 6, 12, 7, 0),
    endDate: new Date(2025, 6, 12, 8, 0),
    description: 'Early morning prayer session for spiritual renewal and breakthrough.',
    location: 'Online Zoom Meeting',
    image: ''
  },
  {
    id: 3,
    title: 'Youth Empowerment Conference',
    type: 'conference',
    startDate: new Date(2025, 6, 20, 9, 0),
    endDate: new Date(2025, 6, 22, 17, 0),
    description: 'A transformative conference for young people to discover their purpose and develop leadership skills.',
    location: 'Convention Center, Abuja, Nigeria',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG7p9okLY_oNkfGHy6JC5yn_6yvNrThs4bMhxTtX_YEY5ZUrd9BGlXNcKLtIxZRjFnYbCco5x7_vR8nCSNwzyjkuPKRlcbSpfnA0ZHBy5yeA3igz-ZqG0ha25GukAZacqGkUC9wAIOK_EcyTceV-x-zRKC_eAGuo7u6eLqBLexqQJIl7E7hV64qsoRCAifvKqTE5wz5gqP25JDDfaBhd7FoSwsEDjFdFTKhbuVxdOO-WWhqyztoOyxQjzkjfSoYFof7IyEt8QhKBk'
  },
  {
    id: 4,
    title: 'TV Interview',
    type: 'media',
    startDate: new Date(2025, 6, 4, 20, 0),
    description: 'Live interview discussing faith and contemporary issues.',
    location: 'Christian Broadcasting Network',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNXQS6B1lgSglRyLtiFjUihFVoffzCBtn_BGBbFsd3jzAp962JiyD0xTwPyKosEhFMU7-2Wn25Dx36tch7MxqkgFGx-VLPriHix55j2bCbQcodXfqg4Kh9PFhw6pC_Iqclo9UAAw8Zab_xUejWnsEgw5RGT1Jzs9ZBYi9K0af0kZ8XfQBZ4Z2oLpBoyoEeU_2s3ZcNSiefBDVUtaF0KK9xJWfcv0ZS_pJZUjudd3Ox4OtK-BJDy5-ygRcQLfKl0KEmK9fxvv5Mpac'
  }
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
    (event.startDate <= date && (!event.endDate || event.endDate >= date))).length
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
    (event.startDate <= date && (!event.endDate || event.endDate >= date)))
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
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Calendar navigation
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  showEventDetails.value = false
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  showEventDetails.value = false
}

const toggleDay = (day) => {
  if (selectedDay.value === day && showEventDetails.value) {
    showEventDetails.value = false
  } else {
    selectedDay.value = day
    showEventDetails.value = true
  }
}

// Initialize with today's date
onMounted(() => {
  const today = new Date()
  currentMonth.value = today.getMonth()
  currentYear.value = today.getFullYear()
  
  // Auto-show today's events if any
  if (isToday(today.getDate())) {
    selectedDay.value = today.getDate()
    showEventDetails.value = true
  }
})
</script>

