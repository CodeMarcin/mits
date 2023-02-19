<script setup lang="ts">
export interface IHeaderProps {
  title: string;
  subTitle: string;
  description: string;
  className?: string;
}

const { title, subTitle, description, className } = withDefaults(defineProps<IHeaderProps>(), {
  className: "my-8",
});
</script>

<template>
  <div :class="[className, `mx-auto flex max-w-[275px] flex-col items-center gap-y-4 text-center`]">
    <p tabindex="1" class="text-title font-fontSecond text-[10px]">{{ title }}</p>
    <p tabindex="1" class="text-main text-[15px]">{{ subTitle }}</p>
    <p tabindex="1" class="text-second font-fontSecond text-[9px]">{{ description }}</p>
  </div>
</template>
