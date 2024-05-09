<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  //data() {
  //  return {
  //    someText: this.text
  //  }
  //},
  computed: {
    textLength() {
      return this.text.length;
    }
  }
}
</script>