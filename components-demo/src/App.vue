<template>
  <div id="app">
    <HelloWorld :heading='heading' @onChangeHeading="heading = $event" />
    <Counter />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  data: function() {
    return {
      heading: 'Vue project'
    }
  },
  watch: {
    heading(oldValue, newValue) {
      console.log([oldValue, newValue])
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
</style>
