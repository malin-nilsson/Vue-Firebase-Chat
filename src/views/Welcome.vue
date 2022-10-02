<template>
  <div class="app-container welcome">
    <div v-if="showLogin">
      <h1 class="heading--lg">Log in</h1>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Sign up</span></p>
    </div>
    <div v-else>
      <h2 class="heading--lg">Sign up</h2>
      <SignupForm @signUp="enterChat" />
      <p>Already registered? <span @click="showLogin = true">Log in</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style lang="scss">
@import "../styles/mixins";
.welcome {
  text-align: center;
  padding: 20px 0px;
}

.welcome .heading--lg {
  font-size: 1.4rem;
  font-weight: 700;
}

.welcome p {
  font-weight: 300;
  font-size: 0.9rem;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 0px auto;

  @include tablet-and-up {
    width: 40%;
    margin: 00px auto;
  }
}

.welcome .input-group {
  margin: 13px 0px;
}
.welcome label {
  display: block;
  margin-left: 5px;
  text-align: left;
  font-weight: 500;
  font-size: 0.85rem;
}
.welcome input {
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  border: 1px solid #d3d3d3;
  outline: none;
  color: #5e5e5e;
  margin: 5px auto;
  font-size: 0.9rem;
  box-sizing: border-box;
}
.welcome span {
  cursor: pointer;
  text-decoration: underline;
}
</style>