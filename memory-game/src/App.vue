<template>
  <div id="app">
    <h1>Memory game</h1>
    <button @click="start" class="btn-start">Play memo game</button>
    <div v-if="shuffledArray.length > 0" class="grid">
      <Card v-for="(number, index) in shuffledArray" :key="index" :number="number" />
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
      shuffledArray: [],
    };
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
        return array;
    },
    start() {
      this.isFlipped = !this.isFlipped;
      this.shuffledArray = this.shuffleArray([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]);
      console.log(this.shuffledArray);
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
  margin-bottom: 50px;
}
.btn-start:hover {
  background-color: rgb(255, 190, 24);
  color: white;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 30%;
  margin: auto;
}
</style>