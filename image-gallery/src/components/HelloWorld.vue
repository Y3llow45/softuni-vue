<template>
  <div class="hello">
    <h2>Image Gallery</h2>
    <img v-bind:src="imageURL" style="width: 200px;" />
    <a v-bind:href="imageURL">Go to site</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageURL: 'https://i.natgeofe.com/n/506bcd08-37e0-4506-b4cc-328b028cdd8c/NationalGeographic_2683370_2x3.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
