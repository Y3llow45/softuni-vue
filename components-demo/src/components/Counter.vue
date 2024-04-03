<template>
    <div class="hello">
      <button class="counter" @click="counter++">{{counter}}</button>
    </div>
</template>
  
<script>
export default {
  name: 'app-counter',
  props: {
    
  },
  data: function() {
    return {
        counter: 0
    }
  },
  methods: {
    increment() {

    }
  }
}
</script>

<style scoped>
.counter {
    width: 100px;
    height: 50px;
    background-color: white;
    border: 1px black solid;
    border-radius: 6px;
    color: black;
    font-size: 24px;
    transition: 0.5s;
}
.counter:hover {
    background-color: orange;
    color: white;
    transition: 0.5s;
}
</style>