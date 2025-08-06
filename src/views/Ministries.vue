<template>
  <div class="bg-[var(--background-color)] min-h-screen">
    <main class="bg-[var(--secondary-color)] px-4 sm:px-6 lg:px-20 py-10 md:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="text-center mb-16">
          <h1 class="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight" style='font-family: "Noto Serif", serif;'>
            Our Ministries
          </h1>
          <p class="mt-4 max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
            Explore the diverse ministries founded by Rev. Chidi Okoroafor, each with a unique mission to transform lives and communities through the power of the Gospel.
          </p>
        </div>
        
        <div class="space-y-24">
          <!-- Global Outreach -->
          <div class="ministry-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4" style='font-family: "Noto Serif", serif;'>
                Global Outreach
                <Globe class="inline-block ml-2 w-6 h-6 text-[var(--primary-color)]" />
              </h2>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                Our Global Outreach ministry is dedicated to taking the message of hope to the nations. We conduct large-scale evangelistic crusades, plant churches in unreached areas, and provide leadership training to empower local pastors and church workers.
              </p>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                <span class="font-bold text-[var(--text-primary)]">Impact Story:</span> In a remote village in Southeast Asia, our team's medical mission provided critical care to over 500 people, opening the door for sharing the Gospel and establishing a thriving new church.
              </p>
              <a class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white text-base font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300" href="#">
                Learn More
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
            <div class="order-1 md:order-2">
              <div class="overflow-hidden rounded-lg shadow-md">
                <div class="w-full h-80 bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCehHjcFB3hcCOXMMAtyimHrXkHCOBiUp2z2cEJ8DHYjH5lOy4G9LxbPQ6T3OsKEbB-eCh3f46JvXlZD4PDcAHrwEnRVEuMTjVXNNzd07SwrL9QbCGWdrJ-NyIJspiGV6l3FQVnjaCKpJFdvTBJ-Yu5VSoCTOYFdMYG5-rI9wDqzq1syhny2gNMi_i_w5AgzNi57GkdvSPEy4QNebw1xOimIKhgqqUvuURoSPKbJCt4Bj8rlXjk6J9NQ2ESf6Iaev_NsL4pKbULp8k");'></div>
              </div>
            </div>
          </div>

          <!-- Community Development -->
          <div class="ministry-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
            <div class="order-1">
              <div class="overflow-hidden rounded-lg shadow-md">
                <div class="w-full h-80 bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxTqqwLFszJ3v2zkrz1GJZgiNy2mTiGE0AhiHbKMPSx2gUDGP2wMd81cn1dSXKtm0ShL-EgAMC-4Nkt5Rt1sCJD_I0zKZQBfzwZIVra2H1zOhR3Nl7wCD0jCXOBJTlUzjz5xpcjA_7uQBqXRamVygvgwqm0OFbva3hGlgajnFRpwnP1XZrWdT5R_0LepGL07VnbSZcZLiKPrKo4cUsrs7QannWEXoNWp8lG0sViG2MDt6VN9qDUCaOxun6Ty2_sSZb_wY5ycy2L-U");'></div>
              </div>
            </div>
            <div class="order-2">
              <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4" style='font-family: "Noto Serif", serif;'>
                Community Development
                <HandHeart class="inline-block ml-2 w-6 h-6 text-[var(--primary-color)]" />
              </h2>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                We believe in demonstrating God's love through practical action. Our Community Development initiatives focus on creating sustainable change through projects like building schools, providing clean water sources, and launching vocational training programs for the underprivileged.
              </p>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                <span class="font-bold text-[var(--text-primary)]">Key Program:</span> Our "Skills for Life" program has equipped hundreds of young adults with marketable skills in tailoring, carpentry, and IT, enabling them to break the cycle of poverty.
              </p>
              <a class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white text-base font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300" href="#">
                Get Involved
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Youth Empowerment -->
          <div class="ministry-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4" style='font-family: "Noto Serif", serif;'>
                Youth Empowerment
                <Users class="inline-block ml-2 w-6 h-6 text-[var(--primary-color)]" />
              </h2>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                The future of the church and society rests on the shoulders of our youth. This ministry is committed to raising a generation of purpose-driven young leaders through dynamic conferences, mentorship programs, and scholarships for higher education.
              </p>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                <span class="font-bold text-[var(--text-primary)]">Impact Story:</span> After attending our annual youth conference, a young woman named Sarah started a campus fellowship that has grown to over 200 students, bringing revival to her university.
              </p>
              <a class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white text-base font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300" href="#">
                Explore Programs
                <ArrowRight class="w-4 h-4" />
              </a>
            </div>
            <div class="order-1 md:order-2">
              <div class="overflow-hidden rounded-lg shadow-md">
                <div class="w-full h-80 bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCG7p9okLY_oNkfGHy6JC5yn_6yvNrThs4bMhxTtX_YEY5ZUrd9BGlXNcKLtIxZRjFnYbCco5x7_vR8nCSNwzyjkuPKRlcbSpfnA0ZHBy5yeA3igz-ZqG0ha25GukAZacqGkUC9wAIOK_EcyTceV-x-zRKC_eAGuo7u6eLqBLexqQJIl7E7hV64qsoRCAifvKqTE5wz5gqP25JDDfaBhd7FoSwsEDjFdFTKhbuVxdOO-WWhqyztoOyxQjzkjfSoYFof7IyEt8QhKBk");'></div>
              </div>
            </div>
          </div>

          <!-- Media and Communications -->
          <div class="ministry-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg">
            <div class="order-1">
              <div class="overflow-hidden rounded-lg shadow-md">
                <div class="w-full h-80 bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNXQS6B1lgSglRyLtiFjUihFVoffzCBtn_BGBbFsd3jzAp962JiyD0xTwPyKosEhFMU7-2Wn25Dx36tch7MxqkgFGx-VLPriHix55j2bCbQcodXfqg4Kh9PFhw6pC_Iqclo9UAAw8Zab_xUejWnsEgw5RGT1Jzs9ZBYi9K0af0kZ8XfQBZ4Z2oLpBoyoEeU_2s3ZcNSiefBDVUtaF0KK9xJWfcv0ZS_pJZUjudd3Ox4OtK-BJDy5-ygRcQLfKl0KEmK9fxvv5Mpac");'></div>
              </div>
            </div>
            <div class="order-2">
              <h2 class="text-3xl font-bold text-[var(--text-primary)] mb-4" style='font-family: "Noto Serif", serif;'>
                Media and Communications
                <Radio class="inline-block ml-2 w-6 h-6 text-[var(--primary-color)]" />
              </h2>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-4">
                Utilizing the power of modern technology, our media ministry broadcasts the Gospel 24/7 across the globe. Through television programs, online streaming, podcasts, and social media, we are reaching millions with life-changing messages of faith and encouragement.
              </p>
              <p class="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                <span class="font-bold text-[var(--text-primary)]">Key Program:</span> Our flagship TV program, "Moments of Power," is aired in over 50 countries, receiving thousands of testimonies of salvation, healing, and deliverance each month.
              </p>
              <router-link class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white text-base font-bold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors duration-300" to="/tv">
                Watch Now
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Globe, HandHeart, Users, Radio, ArrowRight } from 'lucide-vue-next';
</script>