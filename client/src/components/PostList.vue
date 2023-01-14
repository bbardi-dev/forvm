<template>
  <div v-if="posts.length > 0" class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a class="user-name">{{ getUserById(post?.userId)?.name }}</a>
        <a>
          <img class="avatar-large" :src="getUserById(post?.userId)?.avatar" />
        </a>
      </div>
      <div class="post-content">
        <p>
          {{ post?.text }}
        </p>
      </div>
      <DateText class="post-date text-faded" :timestamp="post.publishedAt" />
    </div>
  </div>
  <div v-else>No posts for this thread yet!</div>
</template>

<script setup lang="ts">
import placeholderData from "@/placeholderData";

const { posts } = defineProps<{
  posts: {
    id: string;
    text: string;
    publishedAt: number;
    threadId: string;
    userId: string;
  }[];
}>();

const { users } = placeholderData;

const getUserById = (userId?: string) => users.find((user) => user.id === userId);
</script>

<style scoped></style>
