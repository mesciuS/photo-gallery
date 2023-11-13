<script>
export default {
  data() {
    return {
      navLinks: null,
      menuToggle: null,
      bsCollapse: null
    };
  },

  mounted() {
    this.navLinks = document.querySelectorAll('.nav-item');
    this.menuToggle = document.getElementById('navbarNav');
    let bsCollapse;
    
    function handleNavLinkClick() {
      console.log('Viewport width:', window.innerWidth);
      if (window.innerWidth <= 992) {
        bsCollapse.toggle();
      }
    }
    if (this.menuToggle) {
      bsCollapse = new bootstrap.Collapse(this.menuToggle, { toggle: false });

      this.navLinks.forEach((l) => {
        l.addEventListener('click', handleNavLinkClick);
      });
    }
  },
  
  methods: {
    
  },
};
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-body-secondary">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }">
          <img id="nav-logo" src="../assets/logos/Adventure.png" alt="">
        </router-link>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav nav-underline">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'gallery' }">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'shop' }">Purchase</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  box-shadow: 0 0 5px grey;
}
#nav-logo {
  height: 80px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
}

.navbar-toggler:focus {
  box-shadow: none;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    flex-direction: row-reverse;
  }
  .navbar-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-nav li {
    margin-right: 20px; /* Adjust as needed for spacing between links */
  }
}
</style>
