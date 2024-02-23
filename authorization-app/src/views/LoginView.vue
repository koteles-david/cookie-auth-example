<template>
  <h2>LOGIN</h2>
  <form @submit.prevent="login">
    <input type="text" v-model="username" placeholder="username" autocomplete="username">
    <input type="password" v-model="password" placeholder="password" autocomplete="current-password">
    <button type="submit">LOGIN</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const username = ref('');
const password = ref('');
const login = async () => {
  try {
    const resp = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username.value, password: password.value })
    })

    if (!resp.ok) {
      throw new Error("Login failed")
    }

    if (route.query.redirect) {
      router.push(route.query.redirect as string)
    } else {
      router.push("/")
    }
  } catch(e) {
    console.error(e);
  }
};
</script>