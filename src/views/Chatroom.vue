<template>
  <div class="app-container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  components: { Navbar, NewChatForm, ChatWindow },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
</style>