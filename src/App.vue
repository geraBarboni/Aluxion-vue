<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <main>
    <Nav />
    {{ info }}
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      info: null,
    }
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.button {
  background-color: #091e42;
  height: 38px;
  width: 112px;
  border: 0;
  border-radius: 50px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: rgba(255, 255, 255, 0.9);
}
.buttonB {
  background-color: #ffffff;
  color: #091e42;
  height: 38px;
  width: 112px;
  border: 0;
  border-radius: 50px;
  font-family: SF Pro Display;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #42526e;
}
html {
  height: 100%;
}
</style>
