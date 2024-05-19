import Vue from 'vue'

const userStore = new Vue({
  data: {
    users: null
  },
  methods: {
    loadUsers() {
      setTimeout(() => {
        this.users = [
          {
            id: 1,
            username: 'Tosho'
          },
          {
            id: 2,
            username: 'Bob'
          },
          {
            id: 3,
            username: 'Boo'
          }
        ]
      }, 1000)
    }
  }
})

export default userStore;