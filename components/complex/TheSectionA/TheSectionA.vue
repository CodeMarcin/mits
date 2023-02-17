<script setup lang="ts">
import { OBJECT__HEADER, ARRAY__CLICKABLE_LIST } from "./Data";

import MobileImage from "~/assets/svg/MobileImage.svg";
</script>
<template>
  <div class="flex w-full flex-col">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <div class="flex w-full gap-x-[9px] items-center">
      <div class="w-full shrink-0 sm:w-[276px]">
        <PartsClickableList :props="ARRAY__CLICKABLE_LIST" />
      </div>
      <div class="hidden sm:flex">
        <MobileImage />
      </div>
    </div>
  </div>
</template>
