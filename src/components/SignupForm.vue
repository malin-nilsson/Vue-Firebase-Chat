<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="userName">Username</label>
      <input
        type="text"
        id="userName"
        required
        placeholder="Username"
        v-model="userName"
      />
    </div>

    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        required
        placeholder="Email"
        v-model="email"
      />
    </div>

    <div class="input-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        required
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    // refs
    const userName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(userName.value, email.value, password.value);
    };

    return { userName, email, password, handleSubmit };
  },
};
</script>

<style>
</style>