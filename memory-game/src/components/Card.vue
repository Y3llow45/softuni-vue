<template>
  <div class="card">
    <!--<img :src="isFlipped ? imageSrc[number - 1] : 'back.png'" :class="{ 'card': true, 'flipped': isFlipped }" v-on:click="flip" class="front" />-->
    <img class="front" :src="imageSrc[number - 1]" />
    <img src="back.png" class="back" />
  </div>
</template>

<script>
export default {
  name: 'Card-img',
  props: {
    number: Number,
  },
  data() {
    return {
      isFlipped: false,
      imageSrc: ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'],
      cards: {
        1: [], 2: [], 3: [], 4: [],
        5: [], 6: [], 7: [], 8: [],
        9: [], 10: [], 11: [], 12: [],
        13: [], 14: [], 15: [], 16: [],
      }
    };
  }, methods:{
    flip() {
      this.isFlipped = !this.isFlipped;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-div {
    position: relative;
    perspective: 1000px;
    width: 100px;
    height: 100px;
  }
  .flipped {
    transition: 0.2s;
    transform: rotateY(180deg);
  }
  .card {
    transition: 0.2s;
    width: 100px;
    height: 100px;
    border: 1px rgb(186, 186, 186) solid;
    position: absolute;
  }
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
</style>
