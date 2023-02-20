<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { IAnimatedCountItemProps } from "./AnimatedCountItem.vue";

export interface IAnimatedCountProps {
  props: IAnimatedCountItemProps[];
}

const itemsWrapperRef = ref();
gsap.registerPlugin(ScrollTrigger);

const { props } = defineProps<IAnimatedCountProps>();

onMounted(() => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: itemsWrapperRef.value.children,
        start: "top 85%",
      },
    })
    .from(itemsWrapperRef.value.children, { opacity: 0, ease: "back", stagger: 0.1, y: -10 });
});
</script>

<template>
  <div ref="itemsWrapperRef" class="flex w-full flex-col justify-between gap-x-5 gap-y-16 sm:flex-row">
    <PartsAnimatedCountItem v-for="item in props" v-bind="item" :key="item.description" />
  </div>
</template>
