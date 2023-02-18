<script setup lang="ts">
export interface IAnimatedCountItemProps {
  icon: Component;
  startAmount?: number;
  endAmount: number;
  duration?: number;
  suffix: string;
  description: string;
}

const { icon, startAmount, endAmount, duration, suffix, description } = withDefaults(defineProps<IAnimatedCountItemProps>(), {
  startAmount: 0,
  duration: 2,
});
</script>

<template>
  <div class="flex flex-col items-center text-white">
    <component :is="icon" class="mb-[25px]" />
    <p class="mb-[14px] text-[22px]"><vue3-autocounter :startAmount="startAmount" :endAmount="endAmount" :duration="duration" />{{ suffix }}</p>
    <p class="text-[10px]">{{ description }}</p>
  </div>
</template>
