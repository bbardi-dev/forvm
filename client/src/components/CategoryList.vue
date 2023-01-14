<template>
  <ForumList
    :title="category.title"
    :forums="forumsInCategory(category)"
    v-for="category in categories"
    :key="category.id"
    :categoryId="category.id"
  />
</template>

<script setup lang="ts">
import placeholderData from "@/placeholderData";
import ForumList from "./ForumList.vue";
const { categories } = defineProps<{
  categories: any[];
}>();

const forumsInCategory = (category) =>
  placeholderData.subForums.filter((sf) => sf.categoryId === category.id);
</script>

<style scoped></style>
