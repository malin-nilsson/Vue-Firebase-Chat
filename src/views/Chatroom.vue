<template>
  <div class="app-container">
    <Navbar />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "@/composables/getUser";

export default {
  components: { Navbar },

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