<template>
  <div>
    {{test2}}
    {{textLength}}
    {{user}}
    <div v-if="showDiv" v-event:click="clickHandler"></div>
    <button @click="toggleDiv">Toggle Div</button>
    <button v-if="!user" @click="login">Login</button>
    <button v-if="user" @click="logout">Log out</button>
  </div>
</template>

<script>
import testMixin from '../mixins/testMixin.vue'

export default {
  name: 'HelloWorld',
  mixins: [testMixin],
  props: {
    msg: String
  },
  data() {
    return {
      test2: 'Component test 2',
      showDiv: true
    }
  },
  computed: {
    textLength() {
      return this.test2.length;
    }
  },
  methods: {
    clickHandler(e) {
      console.log(e)
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
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
