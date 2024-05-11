<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test2: 'Test2',
      user: null
    }
  },
  computed: {
    textLength() {
      return this.text.length;
    }
  },
  methods: {
    login(email, password) {
      setTimeout(() => {
        console.log(email,password)
        this.user = {name: 'Bob'}
      }, 2000)
    },
    logout() {
      setTimeout(() => {
        this.user = null
      }, 2000)
    }
  }
}
</script>