<script setup lang="ts">
import { ARRAY__ANIMATED_COUNT } from "./Data";
</script>

<template>
  <div
    class="bg-blue flex skew-y-[1deg] py-[110px] before:absolute before:translate-y-1/2 before:content-[url('~/assets/png/LeftBackgroundSectionB.png')] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:content-[url('~/assets/png/RightBackgroundSectionB.png')]"
  >
    <div class="container mx-auto flex w-full max-w-xl flex-col px-6 z-10">
      <PartsAnimatedCount :props="ARRAY__ANIMATED_COUNT" />
    </div>
  </div>
</template>
