<script setup lang="ts">
export interface IAnimatedCountItemProps {
  icon: Component;
  endCount: number;
  suffix: string;
  description: string;
}

const { icon, endCount, suffix, description } = defineProps<IAnimatedCountItemProps>();
</script>

<template>
  <div class="flex flex-col items-center text-white"><component :is="icon"  class="mb-[25px]"/>
    <p class="text-[22px] mb-[14px]">
        {{endCount}}{{suffix}}
    </p>
    <p class="text-[10px]">{{description}}</p>
  </div>
</template>
