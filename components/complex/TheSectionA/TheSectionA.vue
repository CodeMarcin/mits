<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { OBJECT__HEADER, ARRAY__CLICKABLE_LIST } from "./Data";

import MobileImage from "~/assets/svg/MobileImage.svg";

const mobileImageRef = ref();
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: mobileImageRef.value,
        start: "top 85%",
      },
    })
    .from(mobileImageRef.value, { opacity: 0, ease: "back", stagger: 0.1, x: 10 });
});
</script>

<template>
  <div class="container mx-auto flex w-full max-w-xl flex-col px-6 pt-[32px] pb-[24px]">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <div class="mt-[25px] flex w-full flex-col items-center gap-x-[9px] sm:flex-row">
      <div class="order-2 w-full shrink-0 sm:order-1 sm:w-[276px]">
        <PartsClickableList :props="ARRAY__CLICKABLE_LIST" />
      </div>
      <div ref="mobileImageRef" class="order-1 translate-x-20 sm:order-2 sm:translate-x-0">
        <MobileImage />
      </div>
    </div>
  </div>
</template>
