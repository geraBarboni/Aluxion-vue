<template>
  <div class="aluxioners">
    <div class="titles">
      <span class="team">Team</span>
      <h3>Aluxioners</h3>
    </div>
    <div class="cards">
      <div class="cards2">
        <div
          v-for="aluxioner in aluxioners"
          :key="aluxioner.id"
          class="card"
          @click="aluxioner.modal = !aluxioner.modal"
        >
          <img class="card__img" :src="aluxioner.url" alt="" />
          <h4 class="card__name">{{ aluxioner.name }}</h4>
          <span class="card__profession">{{ aluxioner.profession }}</span>

          <div v-if="aluxioner.modal" class="modal">
            <div class="info__modal">
              <div class="close">
                <button class="buttonB">
                  Cerrar
                </button>
              </div>
              <div class="modal--text">
                <p>
                  Hey {{ aluxioner.name }},
                  <br />
                  ¿Cuál es tu rumbo, aluxioner?
                </p>
              </div>
              <div class="buttons">
                <button class="button">casa</button>
                <button class="button">trabajo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aluxioners: [
        {
          id: '00',
          name: 'Javi',
          url: '../src/assets/img/aluxioners/aluxioner00.png',
          profession: 'CEO & Founder',
          modal: false,
          casaAluxion: 681,
          aluxionCasa: 288,
        },
        {
          id: '01',
          name: 'Aluxioner 01',
          url: '../src/assets/img/aluxioners/aluxioner01.png',
          profession: 'Frontend developer',
          modal: false,
          casaAluxion: 3378,
          aluxionCasa: 494,
        },
        {
          id: '02',
          name: 'Aluxioner 02',
          url: '../src/assets/img/aluxioners/aluxioner02.png',
          profession: 'Backend Developer',
          modal: false,
          casaAluxion: 2908,
          aluxionCasa: 1229,
        },
        {
          id: '03',
          name: 'Aluxioner 03',
          url: '../src/assets/img/aluxioners/aluxioner03.png',
          profession: 'Mobile developer',
          modal: false,
          casaAluxion: 1688,
          aluxionCasa: 2710,
        },
        {
          id: '04',
          name: 'Aluxioner 04',
          url: '../src/assets/img/aluxioners/aluxioner04.png',
          profession: 'Head of Backend',
          modal: false,
          casaAluxion: 59,
          aluxionCasa: 85,
        },
        {
          id: '05',
          name: 'Aluxioner 05',
          url: '../src/assets/img/aluxioners/aluxioner05.png',
          profession: 'Designer',
          modal: false,
          casaAluxion: 189,
          aluxionCasa: 806,
        },
      ],
    }
  },
}
</script>

<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 40%;
  left: 33%;
  width: 651px;
  height: 325px;
  background-color: #ffffff;
  color: 091e42;
}
.info__modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  flex-direction: column;
}
.close {
  width: 50%;
  display: flex;
  justify-content: center;
  margin: auto;
}
.modal--text {
  font-family: SF Pro Display;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  font-weight: bolder;
  margin: auto;
  width: 80%;
  letter-spacing: 0.02em;
  color: #091e42;
}
.buttons {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.aluxioners {
  background-color: #091e42;
}
.titles {
  margin-left: 80px;
}
.team {
  font-family: SF Pro Display;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #42526e;
}
h3 {
  font-family: SF Pro Display;
  font-size: 33px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}
.cards {
  padding-top: 40px;
  width: 100%;
  float: right;
  background-color: #091e42;
}
.card {
  display: inline-block;
  margin-right: 20px;
}
.cards2 {
  margin-left: 80px;
}
.card__name {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}
.card__profession {
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #8993a4;
  margin-top: 6px;
}
.card__img {
  width: 197px;
  height: 210px;
  mix-blend-mode: screen;
}
</style>
