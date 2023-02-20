<script setup lang="ts">
export interface IAnimatedCountItemProps {
  icon: Component;
  startAmount?: number;
  endAmount: number;
  duration?: number;
  suffix: string;
  description: string;
}

const numberRef = ref();
const updateInterval = ref();

const { icon, startAmount, endAmount, duration, suffix, description } = withDefaults(defineProps<IAnimatedCountItemProps>(), {
  startAmount: 0,
  duration: 2000,
});

onMounted(() => {
  updateInterval.value = useAnimateCount(numberRef, startAmount, endAmount, duration);
});

onUnmounted(() => {
  clearInterval(updateInterval.value);
});
</script>

<template>
  <div class="flex flex-col items-center text-white" tabindex="1">
    <component :is="icon" class="mb-[25px]" :aria-label="`${LABEL__ICON} ${description}`" tabindex="1" />
    <p class="mb-[14px] text-[22px]">
      <!-- comment out from this line if you want to use vue3-autocounter-->
      <span ref="numberRef" tabindex="1">{{ startAmount }}</span>
      <span tabindex="1">{{ suffix }}</span>
      <!-- comment out to this line if you want to use vue3-autocounter -->

      <!-- here we can use vue3-autocounter instead of a self-written function -->
      <!-- <vue3-autocounter :startAmount="startAmount" separator :suffix="suffix" :endAmount="endAmount" :duration="duration" /> -->
      <!-- end -->
    </p>
    <p class="text-[10px]" tabindex="1">{{ description }}</p>
  </div>
</template>
