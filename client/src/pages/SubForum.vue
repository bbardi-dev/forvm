<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum details">
        <h1>{{ subForum?.title }}</h1>
        <p class="text-lead">{{ subForum?.description }}</p>
      </div>
      <router-link :to="{ name: 'Home' }" class="btn-green btn-small">Ye</router-link>
    </div>
  </div>
  <div class="col-full">
    <ThreadList :threads="forumThreads" />
  </div>
</template>

<script setup lang="ts">
import ThreadList from "@/components/ThreadList.vue";
import placeholderData from "@/placeholderData";
import { useRouter } from "vue-router";
const router = useRouter();
const route = router.currentRoute.value;
const id = route.params.id;

const { subForums, threads } = placeholderData;

const subForum = subForums.find((sf) => sf.id === id);
const forumThreads = threads.filter((t) => t.subForumId === id);
</script>

<style scoped></style>
