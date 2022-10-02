<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="userName">Username</label>
      <input
        type="text"
        id="userName"
        required
        placeholder="Choose a username"
        v-model="displayName"
      />
    </div>

    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        required
        placeholder="you@email.com"
        v-model="email"
      />
    </div>

    <div class="input-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        required
        placeholder="Enter 6 characters or more"
        v-model="password"
      />
    </div>
    <div class="error">
      {{ error }}
    </div>
    <button>Sign up</button>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup";
import { ref } from "@vue/reactivity";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signUp");
      }
    };

    return { displayName, email, password, error, handleSubmit };
  },
};
</script>

<style>
</style>