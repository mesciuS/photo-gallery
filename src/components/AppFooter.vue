<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>

<template>
  <footer id="footer">
    <div class="footer-square">
      <h1>ciao</h1>
      <h2>ciao 2</h2>
    </div>
    <div class="footer-square">
      <h1>ciao</h1>
      <h2>ciao 2</h2>
    </div>
    <div class="footer-square">
      <h1>ciao</h1>
      <h2>ciao 2</h2>
    </div>
  </footer>
</template>

<style scoped lang="scss">
#footer {
  display: flex;
  justify-content: space-around;
  height: 200px;
  padding: 20px;
  background-color: #333333;
} .footer-square {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
