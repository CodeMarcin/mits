<script setup lang="ts">
import { IClickableItemCustomClass, IClickableItemProps, IClickableItemTypedClass } from "./ClickableItem.vue";
export interface IClickableListProps {
  props: IClickableItemProps<IClickableItemCustomClass | IClickableItemTypedClass>[];
}

const { props } = defineProps<IClickableListProps>();
</script>
<template>
  <div class="flex flex-col w-full gap-y-3"><PartsClickableItem v-for="item in props" v-bind="item" :key="item.title" /></div>
</template>
