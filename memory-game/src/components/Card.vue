<template>
  <div class="card-div">
    <img :src='imageSrc[number-1]' :class="{ 'card': true, 'flipped': isFlipped }" />
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
