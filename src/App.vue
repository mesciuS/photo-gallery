<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data () {
    return {
      message: "wella un po' di figa qua?"
    };
  },
  components: {
    Navbar,
    Footer,
  },

  methods: {

  },
};
</script>
<template>
  <div id="container">
    <Navbar></Navbar>
    {{ message }}
    <Footer></Footer>
  </div>
</template>
<style scoped lang="scss">
</style>