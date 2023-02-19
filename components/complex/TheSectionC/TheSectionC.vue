<script setup lang="ts">
import { OBJECT__HEADER, ARRAY__CAROUSEL } from "./Data";
</script>
<template>
  <div class="container mx-auto flex w-full max-w-xl flex-col px-6">
    <PartsHeader v-bind="OBJECT__HEADER" />
    <PartsCarousel v-bind="ARRAY__CAROUSEL" />
  </div>
</template>
