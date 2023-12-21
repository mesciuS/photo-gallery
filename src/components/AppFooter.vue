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
      <h4>contact</h4>
      <ul>
        <li>Luigi De Vivo</li>
        <li>Via per Uggiano 182</li>
        <li>74024 Manduria (TA), Italy</li>
        <li>Mobile: (+39)3292648919</li>
        <li>Email: lui.devivo5@gmail.com</li>
      </ul>
    </div>
    <div class="footer-square">
      <div class="social-link">
        <h4>socials</h4>
        <div class="social-wrapper">
          <a href="https://www.facebook.com/lui.devivo?fref=ts" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-f" size="xl" /></a>
          <a href="https://www.instagram.com/lui.devivo/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" size="xl" /></a>
        </div>
      </div>
      <div></div>
    </div>
    <div class="footer-square">
      <h4>member of</h4>
      <p>AFNI: Associazione Fotografi Naturalisti Italiani</p>
      <a href="https://www.afni.org/" target="_blank"><img id="footer-logo" src="../assets/logos/AFNI_LOGO.png" alt="AFNI"></a>
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
  max-height: 600px;
  padding: 50px;
  background-color: #333333;
} .footer-square {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #919191;
} ul {
  list-style: none;
  padding: 0;
} a {
  text-align: center;
  color: #919191;
}
.social-wrapper {
  display: flex;
  justify-content: space-around;
}
#footer-logo {
  width: 100px;
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
