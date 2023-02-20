<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { storeToRefs } from "pinia";
import { useClickableItemsStore } from "~/store/clickableItems";
import { IClickableItemCustomClass, IClickableItemProps, IClickableItemTypedClass } from "./ClickableItem.vue";

export interface IClickableListProps {
  props: IClickableItemProps<IClickableItemCustomClass | IClickableItemTypedClass>[];
}

const handleClickAwayReference = ref();
const itemsWrapperRef = ref();
gsap.registerPlugin(ScrollTrigger);

const clickableItemsStore = useClickableItemsStore();
const { getActiveItem } = storeToRefs(clickableItemsStore);
const { handleClickItemAction, handleClickAway } = clickableItemsStore;
const { props } = defineProps<IClickableListProps>();

onMounted(() => {
  handleClickAwayReference.value = handleClickAway;
  window.addEventListener("click", handleClickAwayReference.value);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: itemsWrapperRef.value.children,
        start: "top 85%",
      },
    })
    .from(itemsWrapperRef.value.children, { opacity: 0, ease: "back", stagger: 0.2, x: 10 });
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickAwayReference.value);
});
</script>

<template>
  <div class="flex w-full flex-col gap-y-5" ref="itemsWrapperRef">
    <PartsClickableItem
      v-for="item in props"
      v-bind="item"
      :active-item-name="getActiveItem"
      :data-name="item.name"
      :key="item.title"
      @click.stop="handleClickItemAction(item.name)"
    />
  </div>
</template>
