<template>
  <header>
    <a v-if="getUsernameCookie()" @click="logout">LOGOUT</a>
    <RouterLink v-else to="/login">LOGIN</RouterLink>
  </header>
  <main>
    <router-view />
  </main>
</template>
<script setup lang="ts">
import { useAuthorization } from '@/utils/useAuthorization';
import { useRouter} from 'vue-router';
const { getUsernameCookie } = useAuthorization();
const router = useRouter()

const logout = async () => {
  await fetch("/api/logout")
  router.push("/")
}
</script>