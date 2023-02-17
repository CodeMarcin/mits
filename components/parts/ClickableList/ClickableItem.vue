<script setup lang="ts">
export interface IClickableItemProps<T> {
  title: string;
  description: string;
  icon: Component;
  className: T;
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

const { title, description, icon, className } = defineProps<IClickableItemProps<IClickableItemCustomClass | IClickableItemTypedClass>>();

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
  <div class="flex cursor-pointer flex-col gap-y-4 rounded-lg p-3 transition-all hover:shadow-xl">
    <div class="flex w-full items-center gap-x-3">
      <div :class="[`flex h-[32px] w-[32px] items-center justify-center rounded-md border-2`, itemClassName.borderIconclass]">
        <component :is="icon" />
      </div>
      <p :class="[itemClassName.titleClass, `text-[12px] font-medium`]">{{ title }}</p>
    </div>
    <p class="text-second flex w-full text-[8px]">
      {{ description }}
    </p>
  </div>
</template>