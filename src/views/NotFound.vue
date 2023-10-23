<script>

export default {
  name: 'NotFound',
}

</script>

<template>
  <div id="error-container" class=" d-flex justify-content-center align-items-center" role="alert">
    <h1 class="text-center alert alert-danger">
      Error 404, page not found
    </h1>  
  </div>
</template>
<style scoped lang="scss">
#error-container {
    height: 100vh;
}
</style>