<template>
  <div>
    <div class="lineas__menu">
      <button class="lineas__menu--back">
        <img src="../assets/left-arrow.png" alt="back" />
      </button>
      <p class="lineas__menu--cercanos">Autobuses cercanos</p>
      <div class="lineas__menu--info">
        <div>
          <span>Linea, Persona, {{ parada }}</span>
        </div>
        <div>
          <button class="lineas__menu--buttonGrid">
            <img src="../assets/icon-grid.png" alt="" />
          </button>
          <button class="lineas__menu--buttonList">
            <img src="../assets/icon-list.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div class="lineas__info">
      <div class="lineas__info--header">
        <img src="../assets/icon-bus.png" alt="icon-bus" />
        <span>Linea 220</span>
      </div>
      <div class="lineas__info--cards">
        <div v-for="linea in lineas" :key="linea.id" class="card-grid">
          <div class="card__info">
            <div class="card__info--linea">
              <span>{{ parada }}</span>
            </div>
            <div class="card__info--punto">
              <div class="card__info--punto--ubicacion">
                <span class="card__info--punto--lugar">
                  {{ linea.lugar }}
                </span>
                <br />
                <span class="card__info--punto--barrio">
                  {{ linea.barrio }}
                </span>
              </div>
              <div class="card__info--punto--llegar">
                <div class="card__info--punto--llegar--demora">
                  <img src="../assets/icon-time.png" alt="demora" />
                  <span>{{ linea.demora }} min.</span>
                </div>
                <div class="card__info--punto--llegar--distancia">
                  <img src="../assets/icon-points.png" alt="distancia" />
                  <span>{{ linea.distancia }} mt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    parada: {
      type: String,
      required: true,
      //this.$route.params.parada,
    },
    lineas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      paradaEnApi: null,
      datosApi: null,
      state: false,
      gridList: false,
    }
  },
  mounted() {
    axios
      .get(
        'https://openapi.emtmadrid.es/v1/hello/',
        //https://datos.crtm.es/datasets/crtm::datos-abiertos-elementos-de-la-red-de-autobuses-urbanos-de-madrid-emt/explore?layer=1&location=40.425887%2C-3.689482%2C12.61
        //https://localhost:3000/server/rest/services/Hosted/<serviceName>/<serviceType>/<serviceLayer>/<operation>
        //'https://services5.arcgis.com/UxADft6QPcvFyDU1/arcgis/rest/services/WebMapOOGG/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
        //'https://services5.arcgis.com/UxADft6QPcvFyDU1/arcgis/rest/services/M6_Red/FeatureServer/1/query?where=1%3D1&outFields=IDPOSTE,CODIGOESTACION,CODIGOPOSTE,IDENTIFICATIVO,CODIGOTIPOPOSTE,X,Y,IDFESTACION&outSR=4326&f=json',
      )
      .then((response) => (this.datosApi = response))
      .catch((error) => console.log(error))
  },
}
</script>

<style>
.lineas__menu {
  background-color: #091e42;
  padding-left: 80px;
  padding-top: 80px;
  padding-bottom: 50px;
}
.lineas__menu--back {
  background-color: #091e42;
  border: 0;
  padding-bottom: 18px;
}
.lineas__menu--cercanos {
  font-family: SF Pro Display;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #42526e;
}
.lineas__menu--info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-bottom: 0.5px solid #42526e;
}
.lineas__menu--info span {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}
.lineas__menu--buttonGrid {
  background-color: #091e42;
  border: 0;
  margin-right: 15px;
}
.lineas__menu--buttonList {
  background-color: #091e42;
  border: 0;
}
.lineas__info {
  margin-left: 80px;
  background-color: #091e42;
}
.lineas__info--header {
  margin-bottom: 17px;
  display: flex;
  align-items: center;
}
.lineas__info--header span {
  font-family: SF Pro Display;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-left: 17px;
}
.lineas__info--cards {
  background-color: red;
}
.card-grid {
  width: 305px;
  height: 106px;
  background: #ffffff;
  border-radius: 4px;
  margin: 0 16px 16px 0;
  float: left;
}
.card-grid .card__info {
  display: flex;
  width: 305px;
  height: 75px;
  padding-top: 19px;
}
.card-list {
  width: 626px;
  height: 76px;
  background: #ffffff;
  border-radius: 4px;
  margin: 0 16px 16px 0;
  float: left;
}

.card-list .card__info {
  display: flex;
  margin-top: 19px;
}
.card-list .card__info--punto {
  display: flex;
  width: 85%;
  justify-content: space-between;
}

.card__info--linea {
  font-family: SF Pro Display;
  font-size: 26px;
  line-height: 31px;
  color: #091e42;
  padding-left: 14px;
}

.card__info--punto {
  margin-left: 12px;
}
.card__info--punto--lugar {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #091e42;
}
.card__info--punto--barrio {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #8993a4;
}
.card__info--punto--llegar {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.card__info--punto--llegar--demora {
  display: flex;
  align-items: center;
}
.card__info--punto--llegar--demora span {
  margin-left: 6px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffc121;
}
.card__info--punto--llegar--distancia {
  display: flex;
  align-items: center;
}
.card__info--punto--llegar--distancia span {
  margin-left: 6px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #2dc8a6;
}
</style>
