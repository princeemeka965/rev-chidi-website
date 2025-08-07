<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center mb-12 animate-fade-in">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Contact Us
          </h2>
          <p class="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            We'd love to hear from you! Reach out for prayer requests, event information, or ministry inquiries.
          </p>
        </div>

        <!-- Contact Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden animate-card-enter delay-100">
            <div class="p-6 md:p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 font-serif">Send Us a Message</h3>
              
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    >
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    >
                  </div>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="event">Event Inquiry</option>
                    <option value="ministry">Ministry Partnership</option>
                    <option value="donation">Donation Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div class="flex items-center">
                  <input 
                    id="newsletter" 
                    type="checkbox" 
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  >
                  <label for="newsletter" class="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for updates and devotionals
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors hover:scale-[1.02]"
                >
                  <Send class="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-6 animate-card-enter delay-200">
            <!-- Ministry Headquarters -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="h-48 bg-gray-200 overflow-hidden relative">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789012!2d7.123456789012345!3d6.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNCJOIDfCsDA3JzQxLjEiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="object-cover"
                ></iframe>
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                    Headquarters
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-serif">Ministry Headquarters</h3>
                <div class="space-y-3 text-gray-600">
                  <div class="flex items-start">
                    <MapPin class="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-blue-600" />
                    <p>Enugu, Nigeria</p>
                  </div>
                  <div class="flex items-center">
                    <Phone class="h-5 w-5 mr-3 flex-shrink-0 text-blue-600" />
                    <p>+234 806 551 6105</p>
                  </div>
                  <div class="flex items-center">
                    <Mail class="h-5 w-5 mr-3 flex-shrink-0 text-blue-600" />
                    <p>info@chidiokoroafor.org</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Prayer Request -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
              <div class="h-48 bg-gray-200 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-600">
                    Prayer
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-serif">24/7 Prayer Line</h3>
                <p class="text-gray-600 mb-4">Our dedicated prayer team is available round the clock to intercede for your needs.</p>
                <div class="flex items-center text-blue-600 font-medium">
                  <Phone class="h-5 w-5 mr-2" />
                    <p>+234 803 816 1890</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">Connect With Us</h3>
              <p class="text-gray-600 mb-4">Follow our ministry for daily inspiration, event updates, and live streams.</p>
              <div class="flex space-x-4">
                <a 
                  href="https://web.facebook.com/Chidiokoroafor13" 
                  target="_blank"
                  class="p-3 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook class="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@chidiokoroaformessages-kk9jw" 
                  target="_blank"
                  class="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube class="h-5 w-5" />
                </a>
                <!----<a 
                  href="https://instagram.com/chidiokoroafor" 
                  target="_blank"
                  class="p-3 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram class="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/chidiokoroafor" 
                  target="_blank"
                  class="p-3 bg-blue-100 text-blue-400 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter class="h-5 w-5" />
                </a>--->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { 
  Send,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-vue-next'
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
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>