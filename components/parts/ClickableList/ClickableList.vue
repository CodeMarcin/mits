<script setup lang="ts">
import { useClickableItemsStore } from "~/store/clickableItems";
import { IClickableItemCustomClass, IClickableItemProps, IClickableItemTypedClass } from "./ClickableItem.vue";
export interface IClickableListProps {
  props: IClickableItemProps<IClickableItemCustomClass | IClickableItemTypedClass>[];
}
const clickableItemsStore = useClickableItemsStore();
const { getActiveItem, handleClickItemAction } = clickableItemsStore;
const { props } = defineProps<IClickableListProps>();

</script>
<template>
  <div class="flex w-full flex-col gap-y-3">
    <PartsClickableItem v-for="item in props" v-bind="item" :active-item-name="getActiveItem()" :key="item.title" @click="handleClickItemAction(item.name)" />
  </div>
</template>
