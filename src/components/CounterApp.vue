<template>
  <div class="counterContainer">
    <h2 class="heading-main">Current Count: {{ count }}</h2>

    <div class="input-wrapper">
      <input class="input-field" type="number" v-model="value" />
      <input
        class="submit"
        type="submit"
        @click="setValue(value)"
        value="Set Value"
      />
    </div>
    <div class="btn-wrapper">
      <button class="btn decrement" @click="decrement">Decrement</button>
      <button class="btn increment" @click="increment">Increment</button>
    </div>
    <button class="btn reset" @click="reset">Reset</button>
  </div>
</template>

<script>
import useCounter from "@/composables/counterfunc";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value: 0,
    };
  },
};
</script>

<style scoped>
.counterContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  height: calc(100vh - 60px);
  flex-direction: column;
  animation: fadeIn 1s ease-in-out;
}
.heading-main {
  font-size: 48px;
  margin-bottom: 16px;
  text-align: center;
  font-family: cursive;
  font-weight: bolder;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
}
.btn {
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-family: cursive;
  outline: none;
  border: none;
  border-radius: 7px;
  color: black;
}
.btn.reset {
  background-color: #282c34;
  color: #fff;
}
.btn.reset:hover {
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  transition: all 0.4s;
}
.btn.increment {
  background-color: #6568f4;
  color: #fff;
}
.btn.increment:hover {
  background-color: #fff;
  border: 1px solid #6568f4;
  color: #6568f4;
}
.btn.decrement {
  background-color: red;
  color: #fff;
}
.btn.decrement:hover {
  background-color: #fff;
  border: 1px solid red;
  color: red;
  font-weight: bolder;
  transition: all 0.4s;
}
.input-wrapper {
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  height: 50px;
  padding: 10px;
  width: 260px;
  margin: 20px 0 20px 0;
  font-family: cursive;
  font-size: 16px;
}
.input-field {
  border-radius: 10px 0 0 10px;
  outline: none;
}

.submit {
  border-radius: 0 10px 10px 0;
  background-color: darkred;
  color: #fff;
  width: 100px;
  font-weight: bolder;
  font-size: 16px;
  font-family: cursive;
  outline: none;
  border: none;
}
.submit:hover {
  background-color: #fff;
  border: 1px solid darkred;
  color: darkred;
  transition: all 0.4s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
