<script setup lang="ts">
import { OBJECT__HEADER, ARRAY__CLICKABLE_LIST } from "./Data";

import MobileImage from "~/assets/svg/MobileImage.svg";
</script>

<template>
  <div class="container mx-auto flex w-full max-w-xl px-6 flex-col">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <div class="flex w-full items-center gap-x-[9px]">
      <div class="w-full shrink-0 sm:w-[276px]">
        <PartsClickableList :props="ARRAY__CLICKABLE_LIST" />
      </div>
      <div class="hidden sm:flex">
        <MobileImage />
      </div>
    </div>
  </div>
</template>
