<script>
export default {
  destroyed() {
    window.removeEventListener('popstate', this.goBack, false);
  },
  methods: {
    addEl() {
      if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
      }
    }
  }
};
</script>
