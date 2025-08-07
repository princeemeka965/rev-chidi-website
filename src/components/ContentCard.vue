<script setup>
defineProps({
  title: String,
  description: String,
  type: String,
  image: String,
  frame: String,
  delay: Number
})
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 fade-in-up"
    :style="`transition-delay: ${delay}ms`">
    <div class="aspect-video overflow-hidden">
      <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        :style="`background-image: url(${image})`" v-if="image !== ''"></div>
      <iframe width="390" height="252" :src="`${frame}`"
      class="w-full h-full"
        title="YouTube video player" frameborder="0"
        style="pointer-events: none;"
        v-else
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="p-6 flex-1 flex flex-col">
      <p class="text-sm text-gray-500">{{ type }}</p>
      <h3 class="text-xl font-bold mt-1">{{ title }}</h3>
      <p class="mt-2 text-text-light flex-1">{{ description }}</p>
      <span class="mt-4 text-sm font-bold text-primary self-start" href="#">
        <slot></slot>
      </span>
    </div>
  </div>
</template>