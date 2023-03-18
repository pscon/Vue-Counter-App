<template>
  <main class="full">
    <h1 class="heading-main linkTag">Counter App</h1>

    <img
      src="data:image/png;base64,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"
      alt="counter"
    />
    <p class="home__msg">
      This is a simple counter app built with Vue 3. The counter is a custom
      hook that can be used in any component. The hook contains the count,
      increment, decrement, reset and setValue functions.
    </p>

    <div>
      <button type="button" class="btnClass">
        <router-link to="/counter">Go To Counter</router-link>
      </button>
      <button type="button" class="btnClass">
        <a href="https://www.github.com/pscon">GitHub</a>
      </button>
    </div>
    <div>
      <button type="button" class="btnAbt">
        <a href="https://ekunolapaul.netlify.app" target="_blank">About Me</a>
      </button>
    </div>
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
  color: darkred;
}
.home__msg {
  color: darkred;
  font-family: cursive;
  font-size: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.btnClass {
  background-color: #282c34;
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: cursive;
  font-weight: bolder;
  box-shadow: 1px 1px 3px #555;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.btnClass:hover {
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  transition: all 0.4s;
}
.btnClass a {
  color: inherit;
  text-decoration: none;
}
.btnAbt {
  background-color: #6568f4;
  color: #fff;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: cursive;
  font-weight: bolder;
  box-shadow: 1px 1px 3px #555;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.btnAbt:hover {
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  transition: all 0.4s;
}
.btnAbt a {
  color: inherit;
  text-decoration: none;
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
