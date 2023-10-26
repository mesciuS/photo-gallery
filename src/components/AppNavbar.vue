<script>
export default {
  data() {
    return {
      
    };
  },

  mounted() {
    
  },
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <router-link class="navbar-brand" href="#" :to="{name: 'home'}"><img id="nav-logo" src="../assets/images/Adventure.png" alt=""></router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav nav-underline">
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
  </nav>
</template>

<style scoped lang="scss">
  #nav-logo {
    height: 80px;
  }
  .navbar-collapse {
    transition: all 1s;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
</style>