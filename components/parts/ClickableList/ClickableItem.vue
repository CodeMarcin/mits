<script setup lang="ts">
export interface IClickableItemProps<T> {
  name: string;
  title: string;
  description: string;
  icon: Component;
  className: T;
  activeItemName?: string | null;
}

export interface IClickableItemCustomClass {
  titleClass: string;
  borderIconclass: string;
  type?: never;
}

export interface IClickableItemTypedClass {
  titleClass?: never;
  borderIconclass?: never;
  type: "blue" | "green" | "red";
}

const { name, title, description, icon, className, activeItemName } = defineProps<IClickableItemProps<IClickableItemCustomClass | IClickableItemTypedClass>>();

const itemClassName = computed(() => {
  const { type, titleClass, borderIconclass } = className;

  if (type)
    switch (type) {
      case "blue":
        return { titleClass: "text-blue", borderIconclass: "border-blueSoft" };
      case "red":
        return { titleClass: "text-red", borderIconclass: "border-redSoft" };
      case "green":
        return { titleClass: "text-green", borderIconclass: "border-greenSoft" };
    }

  return { titleClass, borderIconclass };
});
</script>

<template>
  <div tabindex="1" :class="[`flex cursor-pointer flex-col rounded-lg p-3 transition-shadow hover:shadow-xl`, activeItemName === name ? 'shadow-xl' : ``]">
    <div tabindex="1" class="mb-[24px] flex w-full items-center gap-x-3">
      <div tabindex="1" :class="[`flex h-[32px] w-[32px] items-center justify-center rounded-md border-2`, itemClassName.borderIconclass]">
        <component :is="icon" :aria-label="`${LABEL__ICON} ${title}`" />
      </div>
      <p tabindex="1" :class="[itemClassName.titleClass, `text-[12px] font-medium`]">{{ title }}</p>
    </div>
    <p tabindex="1" class="text-second flex w-full text-[8px]">
      {{ description }}
    </p>
  </div>
</template>
