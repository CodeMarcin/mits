<script setup lang="ts">
import { IAnimatedCountItemProps } from "./AnimatedCountItem.vue";

export interface IAnimatedCountProps {
  props: IAnimatedCountItemProps[];
}

const { props } = defineProps<IAnimatedCountProps>();
</script>

<template>
  <div class="flex w-full justify-between"><PartsAnimatedCountItem v-for="item in props" v-bind="item" :key="item.description" /></div>
</template>
