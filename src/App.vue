<template>
  <div class="app">
    <Navbar />
    <ToggleSwitch />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import Navbar from "./components/PageNavBar.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PageFooter,
  },
};
</script>

<style>
.app {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
}
</style>
