<template>
  <div class="col-full">
    <form @submit.prevent="savePost">
      <div class="form-group">
        <textarea v-model="textInput" type="text" class="form-input" name="" id="" cols="30" rows="10" />
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { threadId } = defineProps<{ threadId?: string }>();

const textInput = ref("");
const emit = defineEmits<{
  (e: "save-post", post: any): void;
}>();

const savePost = () => {
  emit("save-post", {
    id: "p" + Math.random() * 100,
    text: textInput.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: threadId ?? "",
    userId: "u1",
  });
  textInput.value = "";
};
</script>

<style scoped></style>
