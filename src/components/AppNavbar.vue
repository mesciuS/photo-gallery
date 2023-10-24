<script>
export default {
  data() {
    return {
      
    };
  },

  mounted() {
    // let navLinkEls = document.querySelectorAll('nav-link');
    // navLinkEls.forEach(navLinkEl => {
    //   navLinkEl.addEventListener('click', () => {
    //     navLinkEl.classList.add('active');
    //   });
    // });
  },
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" href="#" :to="{name: 'home'}">Luigi De Vivo</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex justify-content-between">
        <!-- devo mettere i break points per togliere questo div sopra quando si passa a mobile -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <router-link class="nav-link" href="#" :to="{name: 'home'}">Home</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" href="#" :to="{name: 'gallery'}">Gallery</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="#" :to="{name: 'projects'}">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="#" :to="{name: 'about'}">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" href="#" :to="{name: 'shop'}">Shop sito</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.ilgiardinodelreshop.it/41-stampe-d-autore-e-quadri?q=Formato-Stampa+d%27arte" target="_blank">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  
</style>