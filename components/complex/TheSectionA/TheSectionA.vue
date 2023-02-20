<script setup lang="ts">
import { OBJECT__HEADER, ARRAY__CLICKABLE_LIST } from "./Data";

import MobileImage from "~/assets/svg/MobileImage.svg";
</script>

<template>
  <div class="container mx-auto flex w-full max-w-xl flex-col px-6">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <div class="flex w-full flex-col sm:flex-row items-center gap-x-[9px]">
      <div class="order-2 w-full shrink-0 sm:order-1 sm:w-[276px]">
        <PartsClickableList :props="ARRAY__CLICKABLE_LIST" />
      </div>
      <div class="order-1 sm:order-2">
        <MobileImage />
      </div>
    </div>
  </div>
</template>
