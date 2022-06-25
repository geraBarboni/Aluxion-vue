<template>
  <div class="tuki">
    <p>{{ tukis }}</p>
    <p class="aaa">{{ coincidencia }}</p>
    <p>{{ parada }}</p>
    <p>{{ lineas }}</p>
    <div class="map">
      <button
        v-for="point in lineas"
        :key="point.id"
        class="point"
        id="point.id"
      ></button>
    </div>
  </div>
</template>
<script>
import { useStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore()
    const { lineas } = storeToRefs(store)
    return {
      store,
      lineas,
    }
  },
  props: {
    parada: String,
    //lineas: Object,
  },
  data() {
    return {
      coincidencia: 'a',
    }
  },
  computed: {
    tukis() {
      const laParada = this.parada
      const coso = this.lineas
      //const lala = JSON.parse(coso)
      /*
      const laLinea = coso.filter((coso) => {
        coso.Lines === '161/1'
      })
      */
      return coso
    },
  },
}
</script>

<style>
.aaa {
  background-color: aqua;
}
p {
  color: aliceblue;
  background-color: #091e42;
}
.tuki {
  height: 100%;
  width: 100%;
}
.point {
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: aliceblue;
  margin: 30px;
  border: 0;
  cursor: pointer;
}
.point:focus {
  height: 20px;
  width: 20px;
  border-radius: 15px;
  background-color: aliceblue;
  margin: 30px;
  border: 2px solid aliceblue;
  cursor: pointer;
  padding: 2px;
  background-image: linear-gradient(to bottom, aliceblue 0%, aliceblue 100%),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 1000%,
      100%
    );
  background-clip: content-box, padding-box;
}
.active {
  height: 20px;
  width: 20px;
  border-radius: 20px;
  border: aliceblue solid 2px;
}
</style>
