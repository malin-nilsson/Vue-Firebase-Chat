<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="userName">Username</label>
      <input
        type="text"
        id="userName"
        required
        placeholder="Username"
        v-model="displayName"
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
  setup() {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      console.log("user signed up");
    };

    return { displayName, email, password, error, handleSubmit };
  },
};
</script>

<style>
</style>