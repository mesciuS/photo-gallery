<script>
export default {
    name: 'AppHome',
}

</script>
<template>
    <div id="view-container">
        <div class="square">
            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="3500">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/images/carousel/carousel_1.jpg" class="d-block w-100" alt="carousel_1">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/carousel/carousel_2.jpg" class="d-block w-100" alt="carousel_2">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/carousel/carousel_3.jpg" class="d-block w-100" alt="carousel_3">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/carousel/carousel_4.jpg" class="d-block w-100" alt="carousel_4">
                    </div>
                </div>
            </div>
        </div>
        <div id="container-about">
            <h2>ABOUT ME</h2>
        </div>
        <div id="container-news">
            <h2>NEWS</h2>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .square {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: calc(100vh - 106px);
        background-color: aqua;
    }
    // controllare le media breakdown
    @media (max-width: 1286px) {
        #view-container {
            display: block;
        }
        .square {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: auto;
        }
    }

</style>
