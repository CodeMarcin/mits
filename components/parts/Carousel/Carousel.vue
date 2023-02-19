<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import Arrow from "~/assets/svg/Arrow.svg";
import "~~/assets/css/carouselMain.css";
export interface ICarouselProps {
  slides: Component[];
}

const carouselRef = ref();

const carouselSettings = {
  snapAlign: "center",
  itemsToShow: 5,
  wrapAround: true,
};

const { slides } = defineProps<ICarouselProps>();
</script>

<template>
  <carousel ref="carouselRef" :settings="carouselSettings">
    <slide v-for="(slide, index) in slides" :key="index" tabindex="1">
      <component :is="slide"/>
    </slide>
    <template #addons>
      <div class="absolute top-1/2 flex w-full justify-between">
        <Arrow class="rotate-180 cursor-pointer" @click="carouselRef.prev()" tabindex="1"/>
        <Arrow class="cursor-pointer" @click="carouselRef.next()" tabindex="1"/>
      </div>
    </template>
  </carousel>
</template>
<style scoped></style>
