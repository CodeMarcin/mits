import { defineStore } from "pinia";

export const useClickableItemsStore = defineStore("clickableItemsStore", () => {
  const clickableItemsState: { activeItem: string | null; counts: { [key: string]: number } } = reactive({ activeItem: null, counts: {} });

  const getActiveItem = computed(() => clickableItemsState.activeItem);

  const setNoActiveItem = () => {
    Object.assign(clickableItemsState, { ...clickableItemsState, activeItem: null });
  };

  const handleClickItemAction = (name: string | null) => {
    if (clickableItemsState.activeItem === name || !name) {
      setNoActiveItem();
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

  const handleClickAway = (e: Event) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (!target?.dataset?.name || !target.closest("[data-name")) setNoActiveItem();
  };

  return { getActiveItem, handleClickItemAction, handleClickAway };
});
