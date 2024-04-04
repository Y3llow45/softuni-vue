<template>
  <div class="hello">
    <h2>Change heading</h2><input type="text" :value="heading" @input="changeHeading" />
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    heading: String
  },
  methods: {
    changeHeading(e) {
      let newValue = e.target.value;
      this.$emit('onChangeHeading', newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
