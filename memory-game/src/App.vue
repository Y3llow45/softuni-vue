<template>
  <div id="app">
    <button @click="start" class="btn-start">Play memo game</button>
    <img src="Next.png" :class="{ 'card': true, 'flipped': isFlipped }" />
    <div class="grid">
      <Card v-for="c in 16" :key="c" :c="c" />
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  },
  props: {
    msg: String,
  },
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    start() {
      this.isFlipped = !this.isFlipped;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-start {
  width: 200px;
  height: 50px;
  background-color: #ffffffff;
  border: 1px solid rgb(255, 190, 24);
  border-radius: 4px;
  cursor: pointer;
  color: black;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  font-weight: 100;
  text-decoration: none;
  transition-duration: 0.4s;
  text-align: center;
  margin-top: 100px;
}
.btn-start:hover {
  background-color: rgb(255, 190, 24);
  color: white;
}
.card {
  width: 200px;
}
.flipped {
  transform: rotateY(180deg);
}
</style>
