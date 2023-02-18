<script setup lang="ts">
import { ARRAY__ANIMATED_COUNT } from "./Data";
</script>

<template>
  <div class="bg-blue flex skew-y-[1deg] py-[110px]">
    <div class="container mx-auto flex w-full max-w-xl flex-col px-6">
      <PartsAnimatedCount :props="ARRAY__ANIMATED_COUNT" />
    </div>
  </div>
</template>
