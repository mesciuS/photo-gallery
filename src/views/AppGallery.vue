<script>
export default {
    name: 'AppGallery',
}

</script>
<template>
    <div>
        <div class="galery-img">
            <h1>qui va l'immagine della galleria</h1>
        </div>
        <div class="galery-name">
            <h1>GALLERY</h1>
        </div>
        <div class="d-flex flex-wrap pt-0 p-5 justify-content-lg-around row-gap-3">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
            <img src="https://picsum.photos/250" class="img-fluid" alt="...">
        </div>
    </div>
</template>
<style scoped lang="scss">
    .galery-img {
        height: 80vh;
        background-color: beige;
    }

    h1 {
        text-align: center;
    }
    .galery-name {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }
</style>