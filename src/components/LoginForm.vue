<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        required
        placeholder="you@example.com"
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
    <button>
      <span class="material-symbols-outlined"> login </span>Log in
    </button>
  </form>
</template>
  
<script>
import useLogin from "@/composables/useLogin";
import { ref } from "@vue/reactivity";

export default {
  setup(props, context) {
    // refs
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, error, handleSubmit };
  },
};
</script>
  
  <style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-decoration: none;
    margin-right: 5px;
  }
}
</style>