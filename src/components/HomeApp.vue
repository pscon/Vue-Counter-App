<template>
  <main class="full">
    <h1 class="heading-main">Counter App</h1>
    <p class="home__msg">
      A Counter App coded in Vue that performs Increment, Decrement, Reset and
      setValue functions.
    </p>

    <div>
      <button type="button" class="btn">
        <router-link to="/counter">Counter</router-link>
      </button>
      <button type="button" class="btn">
        <a href="https://www.github.com/pscon">GitHub</a>
      </button>
    </div>

    <span class="span"
      ><p class="home__msg">
        Done by Ekunola Paul in partial fulfillment to ALT 3rd Semester Exams
      </p></span
    >
  </main>
</template>

<script>
export default {
  name: "HomeApp",
};
</script>

<style>
/* ... */
.full {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 80px);
  width: 98%;
  margin: 0 auto;
  animation: fadeIn 1.5s ease-in-out;
}
.heading-main {
  font-size: 48px;
  margin-bottom: 16px;
  text-align: center;
  font-family: cursive;
  font-weight: bolder;
}
.home__msg {
  font-family: terFont;
  font-size: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 100px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin: 10px;
}
.btn a {
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  font-family: cursive;
}
@keyframes fadeIn {
  0% {
    opacity: -8;
  }
  100% {
    opacity: 3;
  }
}
</style>
