<template>
  <div class="col-large push-top">
    <h1>{{ thread?.title }}</h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save-post="addPost" :threadId="thread?.id" />
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
import placeholderData from "@/placeholderData";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { threads, posts } = placeholderData;
const route = router.currentRoute.value;
const thread = threads.find((thread) => thread.id === route.params.id);
const threadPosts = ref(posts.filter((p) => p.threadId === thread?.id)).value;

const addPost = (newPost: typeof posts[1]) => {
  threadPosts.push(newPost);
};
</script>
