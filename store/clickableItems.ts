import { defineStore } from "pinia";

export const useClickableItemsStore = defineStore("clickableItemsStore", () => {
  const clickableItemsState: { activeItem: string | null; counts: { [key: string]: number } } = reactive({ activeItem: null, counts: {} });

  const getActiveItem = computed(() => clickableItemsState.activeItem);

  const handleClickItemAction = (name: string) => {
    if (clickableItemsState.activeItem === name) {
      Object.assign(clickableItemsState, { ...clickableItemsState, activeItem: null });
      console.log("=> Clicked not saved <=");
      return;
    }
    Object.assign(clickableItemsState, { ...clickableItemsState, activeItem: name });
    if (name in clickableItemsState.counts)
      Object.assign(clickableItemsState, { ...clickableItemsState, counts: { ...clickableItemsState.counts, [name]: ++clickableItemsState.counts[name] } });
    else Object.assign(clickableItemsState, { ...clickableItemsState, counts: { ...clickableItemsState.counts, [name]: 1 } });
    console.log("Current item clicked => ", clickableItemsState.counts[name]);
    console.log("All items clicked => ", toRaw(clickableItemsState.counts));
  };

  return { getActiveItem, handleClickItemAction };
});
