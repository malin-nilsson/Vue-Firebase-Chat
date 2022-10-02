<template>
  <nav v-if="user">
    <div>
      <p class="display-name">
        <span class="material-symbols-outlined"> waving_hand </span>Hey there,
        {{ user.displayName }}
      </p>
      <p class="email">
        Currently logged in as
        <span class="material-symbols-outlined"> person </span> {{ user.email }}
      </p>
    </div>
    <button @click="handleClick">
      <span class="material-symbols-outlined"> logout </span>Logout
    </button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };

    return { handleClick, user };
  },
};
</script>

<style lang="scss">
@import "../styles/mixins";

nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @include tablet-and-up {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 2px auto;
    font-size: 1rem;
    color: #444;
  }

  p.email {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #999;
  }
  .email span {
    margin-left: 5px;
  }

  .display-name {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    span {
      margin-right: 5px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0px;

    @include tablet-and-up {
      width: 7rem;
      margin: unset;
  }
  }
}
</style>