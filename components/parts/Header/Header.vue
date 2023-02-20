<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export interface IHeaderProps {
  title: string;
  subTitle: string;
  description: string;
  className?: string;
}

const itemsRefTitle = ref([]);
const itemsRefSubTitle = ref([]);
const itemsRefDescription = ref([]);
gsap.registerPlugin(ScrollTrigger);

const { title, subTitle, description } = defineProps<IHeaderProps>();

onMounted(() => {
  const animationProp = { opacity: 0, y: -10, ease: "back", duration: 0.2 };
  gsap
    .timeline({
      scrollTrigger: {
        trigger: itemsRefTitle.value,
        start: "top 85%",
      },
    })
    .from(itemsRefTitle.value, animationProp)
    .from(itemsRefSubTitle.value, animationProp)
    .from(itemsRefDescription.value, animationProp);
});
</script>

<template>
  <div class="mx-auto flex max-w-[275px] flex-col items-center gap-y-4 text-center">
    <p ref="itemsRefTitle" tabindex="1" class="item text-title font-fontSecond text-[10px]">{{ title }}</p>
    <p ref="itemsRefSubTitle" tabindex="1" class="item text-main text-[15px]">{{ subTitle }}</p>
    <p ref="itemsRefDescription" tabindex="1" class="item text-second font-fontSecond text-[9px]">{{ description }}</p>
  </div>
</template>
