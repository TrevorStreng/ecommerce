<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");

const login = async () => {
  try {
    const data = {
      email: email.value,
      password: password.value,
    };
    await axios.post("http://localhost:3000/api/users/login", data);
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <form class="flex flex-col" @submit.prevent="login">
    <p>email</p>
    <input
      v-model="email"
      type="text"
      name="email"
      id="email"
      class="border border-black w-2/3 rounded"
      required
    />
    <p>password</p>
    <input
      v-model="password"
      type="password"
      name="password"
      id="email"
      class="border border-black w-2/3 rounded"
      required
    />
    <button class="border border-black w-2/3" type="submit">login</button>
  </form>
</template>
