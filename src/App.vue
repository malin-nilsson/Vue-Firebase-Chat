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
  width: 100%;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;

  @include tablet-and-up {
    width: 80%;
  }
}

.error {
  color: #ff3f80;
  font-size: 14px;
}

button {
  text-decoration: none;
  background: #a8f5e6;
  color: rgb(40, 40, 40);
  border: 0;
  border-radius: 20px;
  padding: 17px 20px;
  font-size: 0.9rem;
  width: 100%;
  margin: 10px 0px;

  &:hover {
    cursor: pointer;
  }
}
</style>
