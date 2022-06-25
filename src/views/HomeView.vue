<script setup>
/*
La vista Home tendrá dos partes 
1. Hero con un Input para la búsqueda de líneas/paradas 
2. Componente “Aluxioners”
2.1 El componente aluxioners tendra las fotos, nombre y cargo de cada Aluxioner, las mismas serán clickeables, mostrando un modal con dos opciones a elegir, destino casa o destino trabajo, ambas redireccionará a la vista About, donde se mostrarán la parada cercana para dirigirse al lugar de destino seleccionado. Esta misma es enviada como parámetro desde el componente “Aluxioners”.

*/
import { RouterLink, RouterView } from 'vue-router'
import Aluxioners from '@/components/Aluxioners.vue'
</script>

<template>
  <main>
    <div class="hero">
      <div class="title"><h1>Don't be late, aluxioner</h1></div>
      <div class="search">
        <div class="input">
          <input
            type="search"
            name=""
            id="search"
            placeholder="¿Cuál es tu parada?"
          />
        </div>
      </div>
    </div>
    <Aluxioners />
  </main>
</template>

<style>
.hero {
  background-color: #091e42;
  height: 60vh;
  display: flex;
  justify-content: space-between;
}
.title {
  width: 740px;
  height: 211px;
  margin-top: auto;
  margin-bottom: auto;
}
.title h1 {
  font-family: SF Pro Display;
  margin-left: 80px;
  font-size: 92px;
  line-height: 105.4px;
  letter-spacing: 0.02em;
  color: #ffffff;
}
.search {
  width: 30%;
  height: 100%;
  display: flex;
}
.input {
  width: 414px;

  margin: auto;
}
#search {
  font-family: SF Pro Display;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  padding-bottom: 5px;
  color: #8993a4;
  border: 0;
  border-bottom: 2px solid aliceblue;
  background-color: #091e42;
  width: 414px;
}
</style>
