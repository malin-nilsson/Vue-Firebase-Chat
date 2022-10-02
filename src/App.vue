<template>
  <router-view />
</template>

<style lang="scss">
@import "./styles/mixins";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap");

body {
  margin: 0;
  padding: 0;
  background: #e3e1ff;
  color: #444;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
  font-size: 12pt;
}

.app-container {
  width: 90%;
  margin: 40px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: #fff;

  @include tablet-and-up {
    width: 80%;
    margin: 70px auto;
  }

  @include desktop-and-up {
    width: 70%;
  }
}

.error {
  color: #ff3f80;
  font-size: 1rem;
  margin: 5px 0px;
}

button {
  @include btn();
}
</style>
