<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Lineas from '@/components/Lineas.vue'
import Map from '@/components/Map.vue'
</script>
<template>
  <div class="map">
    <div class="left">
      {{ parada }}
      <Lineas :parada="parada" :lineas="lineas" />
    </div>
    <div class="right">
      <Map :parada="parada" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    parada: {
      type: String,
      required: true,
      //this.$route.params.parada,
    },
  },
  data() {
    return {
      lineas: [
        {
          id: 0,
          linea: '220',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '15',
          distancia: '300',
          parada: '',
        },
        {
          id: 1,
          linea: '221',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '16',
          distancia: '310',
          parada: '',
        },
        /*
        {
          id: 2,
          linea: '222',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '17',
          distancia: '320',
        },
        {
          id: 3,
          linea: '230',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '18',
          distancia: '330',
        },
        {
          id: 4,
          linea: '240',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '18',
          distancia: '340',
        },
        {
          id: 5,
          linea: '250',
          lugar: 'Plaza Lima',
          barrio: 'Hortaleza',
          demora: '19',
          distancia: '350',
        },
        */
      ],
    }
  },
}
</script>

<style>
.map {
  width: 100%;
  width: 99.1vw;
  height: 100vh;
}
.left {
  float: left;
  background-color: #091e42;
  width: 50%;
  height: 100%;
}
.right {
  float: right;
  background-color: #091e42;
  width: 50%;
  height: 100%;
}
</style>
