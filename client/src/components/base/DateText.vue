<template>
  <span :title="formatTimeHumanFriendly(timestamp)">
    {{ formatTimeFromNow(timestamp) }}
  </span>
</template>

<script setup lang="ts">
import dayjs from "@/utils/dayjs";
const { timestamp } = defineProps<{ timestamp: number }>();

const formatTimeFromNow = (timestamp: number) => dayjs.unix(timestamp).fromNow();
const formatTimeHumanFriendly = (timestamp: number) => dayjs.unix(timestamp).format("llll");
</script>

<style scoped></style>
