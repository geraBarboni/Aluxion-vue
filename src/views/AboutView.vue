<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Lineas from '@/components/Lineas.vue'
import Map from '../components/Map.vue'
</script>
<template>
  <div class="map">
    <div class="left">
      <Lineas />
    </div>
    <div class="right">
      <Map />
    </div>
  </div>
</template>

<style>
.map {
  margin: 0px;
  padding: 0px;
  background-color: blue;
  height: 80vh;
  width: 100%;
  display: flex;
}
.left {
  background-color: #091e42;
  width: 50%;
  height: 100%;
}
.right {
  background-color: red;
  width: 50%;
  height: 100%;
}
</style>
