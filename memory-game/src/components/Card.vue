<template>
  <div class="start">
    <h1>{{c}}</h1>
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
      imageSRC: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
