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

const checkHandleType = (e: MouseEvent | KeyboardEvent) => {
  return (e instanceof MouseEvent && e.type === "click") || (e instanceof KeyboardEvent && (e.key === "Enter" || e.key === " "));
};

const handlPrev = (e: MouseEvent | KeyboardEvent) => checkHandleType(e) && carouselRef.value.prev();
const handleNext = (e: MouseEvent | KeyboardEvent) => checkHandleType(e) && carouselRef.value.next();

const { slides } = defineProps<ICarouselProps>();
</script>

<template>
  <carousel ref="carouselRef" :settings="carouselSettings" @keyup.left="carouselRef.prev()" @keyup.right="carouselRef.next()" tabindex="1">
    <slide v-for="(slide, index) in slides" :key="index">
      <component :is="slide" />
    </slide>
    <template #addons>
      <div class="absolute top-1/2 flex w-full justify-between">
        <Arrow class="rotate-180 cursor-pointer" @click="handlPrev" @keyup="handlPrev" tabindex="1" :aria-label="LABEL__PREV" />
        <Arrow class="cursor-pointer" @click="handleNext" @keyup="handleNext" tabindex="1" :aria-label="LABEL__NEXT" />
      </div>
    </template>
  </carousel>
</template>
