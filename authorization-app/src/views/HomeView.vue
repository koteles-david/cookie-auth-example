<template>
  <h2 v-if="!getUsernameCookie()">YOU ARE NOT LOGGED IN</h2>
  <h2 v-else>YOU ARE LOGGED IN</h2>
  <img src="@/assets/pikachu.jpg" alt="">
</template>

<script setup lang="ts">
import { useAuthorization } from '@/utils/useAuthorization';
const { getUsernameCookie } = useAuthorization();
</script>