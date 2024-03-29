<template>
  <div class="hello">
    <h2>Image Gallery</h2>
    <img v-bind:src="imageURL" style="width: 200px;" />
    <a v-bind:href="imageURL">Go to site</a>
    <div v-if="isValid">
      Content is valid!
    </div>
    <template v-else>
      Content is invalid!
    </template>

    <h2 v-on:mouseover="showHeading = true">Time is ...?</h2>
    <div v-if="showHeading">{{currentDate}}</div>

    <div v-for="f in fruits" v-bind:key="f.id">
      <h2 v-bind:key="fruit">{{f.type}}</h2>
      <p v-bind:key="fruit">{{f.weight}}</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      imageURL: 'https://i.natgeofe.com/n/506bcd08-37e0-4506-b4cc-328b028cdd8c/NationalGeographic_2683370_2x3.jpg',
      isValid: true,
      currentDate: new Date(),
      showHeading: false,
      fruits: [
        {id: 0, type: 'Kiwi', weight: 0.5},
        {id: 1, type: 'Banana', weight: 1},
        {id: 2, type: 'Orange', weight: 1.5},
        {id: 3, type: 'Apple', weight: 1},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
