<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<script>
import userStore from '@/store';
export default {
  methods: {
    login() {
      userStore.login(() => {
        this.$router.push('/protected')
      })
    }
  }
}
</script>

<style>

</style>