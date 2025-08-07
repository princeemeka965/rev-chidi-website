<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Support Our Ministry
          </h2>
          <p class="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Your generous donation helps spread the Gospel and transform lives
          </p>
        </div>

        <!-- Donation Options -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Online Donation Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden animate-card-enter delay-100">
            <div class="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
              <CreditCard class="w-16 h-16 text-white" />
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-serif">Online Donation</h3>
              <p class="text-gray-600 mb-6">Securely donate using your credit/debit card or mobile money through our Paystack integration.</p>
              
              <form @submit.prevent="processPaystackPayment" class="space-y-4">
                <div>
                  <label for="amount" class="block text-sm font-medium text-gray-700 mb-1">Donation Amount (₦)</label>
                  <input 
                    type="number" 
                    id="amount" 
                    v-model="donationAmount"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter amount"
                    min="100"
                    required
                  >
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    @click="setAmount(5000)"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    :class="{'bg-blue-100 border border-blue-300': donationAmount === 5000}"
                  >
                    ₦5,000
                  </button>
                  <button 
                    type="button"
                    @click="setAmount(10000)"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    :class="{'bg-blue-100 border border-blue-300': donationAmount === 10000}"
                  >
                    ₦10,000
                  </button>
                  <button 
                    type="button"
                    @click="setAmount(20000)"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    :class="{'bg-blue-100 border border-blue-300': donationAmount === 20000}"
                  >
                    ₦20,000
                  </button>
                  <button 
                    type="button"
                    @click="setAmount(50000)"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    :class="{'bg-blue-100 border border-blue-300': donationAmount === 50000}"
                  >
                    ₦50,000
                  </button>
                </div>
                
                <div>
                  <label for="purpose" class="block text-sm font-medium text-gray-700 mb-1">Donation Purpose</label>
                  <select 
                    id="purpose" 
                    v-model="donationPurpose"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="general">General Donation</option>
                    <option value="missions">Missions Support</option>
                    <option value="building">Building Fund</option>
                    <option value="benevolence">Benevolence Fund</option>
                    <option value="other">Other Purpose</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors hover:scale-[1.02]"
                  :disabled="processingPayment"
                >
                  <span v-if="!processingPayment">Donate Now</span>
                  <span v-else class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                </button>
              </form>
            </div>
          </div>

          <!-- Bank Transfer Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden animate-card-enter delay-200">
            <div class="h-48 bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
              <Banknote class="w-16 h-16 text-white" />
            </div>
            <div class="p-6 md:p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 font-serif">Bank Transfer</h3>
              <p class="text-gray-600 mb-6">You can make direct transfers to our ministry bank accounts:</p>
              
              <div class="space-y-4">
                <div class="border border-gray-200 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">Naira Account</h4>
                  <div class="space-y-2 text-gray-600">
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Bank:</span>
                      <span>First Bank of Nigeria</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Account Name:</span>
                      <span>Chidi Okoroafor Ministries</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Account Number:</span>
                      <span>1234567890</span>
                    </div>
                  </div>
                </div>
                
                <div class="border border-gray-200 rounded-lg p-4">
                  <h4 class="font-bold text-gray-900 mb-2">Dollar Account</h4>
                  <div class="space-y-2 text-gray-600">
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Bank:</span>
                      <span>First Bank of Nigeria</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Account Name:</span>
                      <span>Chidi Okoroafor Ministries</span>
                    </div>
                    <div class="flex items-center">
                      <span class="font-medium mr-2">Account Number:</span>
                      <span>0987654321</span>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50 p-4 rounded-lg">
                  <p class="text-sm text-blue-800">
                    <span class="font-bold">Note:</span> After making your transfer, please send the payment details to 
                    <a href="mailto:donations@chidiokoroafor.org" class="text-blue-600 hover:underline">donations@chidiokoroafor.org</a> 
                    for proper recording and receipt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonials Section -->
        <div class="mt-16 animate-fade-in">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center font-serif">Impact of Your Giving</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 mr-4">
                  <div class="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <HeartHandshake class="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Benevolence Support</h4>
                  <p class="text-gray-600 mt-1 text-sm">"Your donations helped provide food and shelter for 50 families during the last crisis."</p>
                </div>
              </div>
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 mr-4">
                  <div class="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Church class="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Church Planting</h4>
                  <p class="text-gray-600 mt-1 text-sm">"Through your giving, we've established 3 new churches in rural communities this year."</p>
                </div>
              </div>
              <div class="h-48 bg-gray-200 rounded-lg overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CreditCard,
  Banknote,
  HeartHandshake,
  Church
} from 'lucide-vue-next'

// Donation form state
const donationAmount = ref('')
const donationPurpose = ref('general')
const processingPayment = ref(false)

// Set donation amount
const setAmount = (amount) => {
  donationAmount.value = amount
}

// Process Paystack payment
const processPaystackPayment = () => {
  processingPayment.value = true
  
  // In a real implementation, this would initialize Paystack payment
  // Here's a mock implementation:
  setTimeout(() => {
    processingPayment.value = false
    alert(`Payment of ₦${donationAmount.value} for ${donationPurpose.value} would be processed via Paystack`)
  }, 2000)
}
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

/* Responsive adjustments */
@media (max-width: 767px) {
  .donation-options {
    grid-template-columns: 1fr;
  }
  
  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>