<template>
  <div class="forum-list">
    <h2 v-if="categoryId" class="list-title">
      <router-link :to="{ name: 'Category', params: { id: categoryId } }">{{ title }}</router-link>
    </h2>
    <div class="forum-listing" v-for="forum in forums" :key="forum.id">
      <div class="forum-details">
        <router-link :to="{ name: 'SubForum', params: { id: forum.id } }" class="text-xlarge">{{
          forum.title
        }}</router-link>
        <p>{{ forum.description }}</p>
      </div>
      <div class="threads-count">
        <p>
          <span class="count">{{ forum.threads.length }}</span>
          {{ forum.threads.length === 1 ? "thread" : "threads" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { forums, title = "Forum" } = defineProps<{
  forums: any[];
  title?: string;
  categoryId?: string;
}>();
</script>

<style scoped></style>
