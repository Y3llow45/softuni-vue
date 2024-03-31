<template>
  <div class="start">
    
  </div>
</template>

<script>
export default {
  name: 'Card-img',
  props: {
    c: Number,
  },
  data() {
    return {
      isFlipped: false,
      cards: {
        1: [], 2: [], 3: [], 4: [],
        5: [], 6: [], 7: [], 8: [],
        9: [], 10: [], 11: [], 12: [],
        13: [], 14: [], 15: [], 16: [],
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
