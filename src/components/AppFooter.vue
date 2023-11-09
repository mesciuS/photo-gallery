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
      <div>
        contenuto 1
      </div>
      <div>
        contenuto 2
      </div>
      <div>
        contenuto 3
      </div>
    </div>
    <div class="footer-square">
      <div>
        contenuto 1
      </div>
      <div>
        contenuto 2
      </div>
      <div>
        contenuto 3
      </div>
    </div>
    <div class="footer-square">
      <div>
        contenuto 1
      </div>
      <div>
        contenuto 2
      </div>
      <div>
        contenuto 3
      </div>
    </div>
  </footer>
  <div id="copyright">
    <p>© Copyright - Luigi De Vivo - All rights reserved</p>
  </div>
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
  color: #919191;
}
#copyright {
  padding: 5px;
  text-align: center;
  background-color: black;
  color: white;
} p {
  margin: 0;
}

@media (max-width: 576px) {
  #footer {
    flex-direction: column;
    height: 100%;
  } .footer-square {
    padding-bottom: 20px;
  }
}
</style>
