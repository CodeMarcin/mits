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
  <div :class="[className, `flex flex-col items-center mx-auto max-w-xl text-center gap-y-8`]">
    <p class="text-title text-sm">{{ title }}</p>
    <p class="text-main font-semibold max-w-xs">{{ subTitle }}</p>
    <p class="text-second">{{ description }}</p>
  </div>
</template>
