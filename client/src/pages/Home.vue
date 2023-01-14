<template>
  <div class="col-full">
    <h1>Welcome to Forvm!</h1>
    <CategoryList :categories="categories" />
  </div>
</template>

<script setup lang="ts">
import CategoryList from "@/components/CategoryList.vue";
import placeholderData from "@/placeholderData";

const { categories } = placeholderData;
</script>
