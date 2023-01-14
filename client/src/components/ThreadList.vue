<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <router-link :to="{ name: 'ThreadDetail', params: { id: thread.id } }" class="text-large">{{
            thread.title
          }}</router-link>
        </div>
        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} {{ thread.posts.length === 1 ? "reply" : "replies" }}
          </p>
          <img class="avatar-medium" :src="getUserById(thread.userId)?.avatar" />
          <div>
            <p class="text-xsmall">
              By: <a> {{ getUserById(thread.userId)?.name }}</a>
            </p>
            <DateText class="text-xsmall text-faded" :timestamp="thread.publishedAt" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="pagination">
      <button class="btn-circle">
        <i> </i>
      </button>
      <span>1 of 3</span>
      <button class="btn-circle">
        <i> </i>
      </button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import placeholderData from "@/placeholderData";

const props = defineProps<{
  threads: typeof placeholderData.threads;
}>();

const { users } = placeholderData;
const getUserById = (userId?: string) => users.find((user) => user.id === userId);
</script>
