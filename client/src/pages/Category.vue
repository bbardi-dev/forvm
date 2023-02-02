<template>
  <ForumList
    :title="category?.title"
    :forums="getForumsForCategory(category)"
  />
</template>

<script setup lang="ts">
import ForumList from "@/components/ForumList.vue";
import placeholderData from "@/placeholderData";

const { id } = defineProps<{
  id: string;
}>();

const category = placeholderData.categories.find((c) => c.id === id);
const getForumsForCategory = (category) =>
  placeholderData.subForums.filter((f) => f.categoryId === category.id);
</script>

<style scoped></style>
