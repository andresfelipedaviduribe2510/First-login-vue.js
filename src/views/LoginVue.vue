<script setup lang="ts">
import { ref } from "vue";
import { AuthService } from "@/services/AuthService";
import { useRouter } from "vue-router";

const email = ref("");
const router = useRouter();

async function handleLogin() {

  const user = await AuthService.login(email.value);

  if (!user) {
    alert("Usuario incorrecto");
    return;
  }

  alert("Bienvenido " + user.name);

}
</script>

<template>
  <div>
    <h1>Login</h1>

    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />

    <button
      @click="handleLogin"
    >
      Login
    </button>
  </div>
</template>