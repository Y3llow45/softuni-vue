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
      test2: 'Test2'
    }
  },
  computed: {
    textLength() {
      return this.text.length;
    }
  }
}
</script>