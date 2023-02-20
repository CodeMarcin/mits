<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { OBJECT__HEADER, ARRAY__CAROUSEL } from "./Data";
const carouselRef = ref();
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: carouselRef.value,
        start: "top 85%",
      },
    })
    .from(carouselRef.value, { opacity: 0, ease: "back", x: -100 });
});
</script>
<template>
  <div class="container mx-auto mt-[57px] flex w-full max-w-xl flex-col px-6">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <div ref="carouselRef">
      <PartsCarousel v-bind="ARRAY__CAROUSEL" />
    </div>
  </div>
</template>
