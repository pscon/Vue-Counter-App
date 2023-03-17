<template>
  <main class="error">
    <div class="image_wrapper">
      <img src="@/assets/error.jpg" />
    </div>
    <div class="errorText">
      <h1 class="errorHeading">
        4<span class="errorSpan">0</span>4 Page Not Found
      </h1>
      <p class="error__msg">Sorry, the requested url could not be found.</p>
      <router-link to="/">Go back to Home page</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style>
/* ... */
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 80px);
  width: 98%;
  margin: 0 auto;
}
.image_wrapper {
  width: 400px;
  height: 300px;
}
.image_wrapper img {
  width: 100%;
}
.errorHeading {
  font-size: 48px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-family: cursive;
  font-weight: bolder;
}
.errorSpan {
  color: red;
}
.errorText {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.error__msg {
  font-family: terFont;
  font-size: 16px;
  text-align: center;
  color: red;
}
</style>
