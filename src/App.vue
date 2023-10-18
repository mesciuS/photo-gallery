<script>
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data () {
    return {
      
    };
  },
  components: {
    AppNavbar,
    AppFooter,
  },

  methods: {

  },
};
</script>
<template>
  <div id="container">
    <AppNavbar></AppNavbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>
<style scoped lang="scss">
</style>