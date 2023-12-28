<script>
export default {
    name: 'AppHome',
    mounted() {
        new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'), {
        interval: 3500,
        pause: 'false'
        });
    },
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
            <h2 class="home-title">about me</h2>
            <div class="about-wrapper">
                <div class="wrapper-text">
                    <p>
                        I ventured into wildlife photography driven by my profound love for animals. Capturing them is a complex and demanding task; it goes beyond merely taking shots. The goal is to portray the animal in its absolute natural state within its environment. In my photographs, the spotlight consistently belongs to the animals. Even when capturing landscapes, settings, trees, flowers, or rocks, I aim to underscore that these elements are integral to the animals' living spaces. In essence, animals are never isolated from their habitats.
                        <br>
                        Quality photographs play a crucial role in acquainting people with the characteristics of both environments and animals, contributing to the promotion of environmental education. This process represents our sole opportunity to engage in meaningful discussions about conservation.
                    </p>
                </div>
                <div class="wrapper-img">
                    <img src="../assets/images/foto-profilo.jpg" alt="foto profilo">
                </div>
            </div>
        </div>
        <div id="container-news">
            <h2 class="home-title">news</h2>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .square {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: calc(100vh - 106px);
        box-shadow: 2px 2px 10px grey;
    } 
    #container-about {
        padding: 50px;
    } .home-title {
        padding-bottom: 30px;   
    }
    .about-wrapper {
        display: flex;
    } .wrapper-text, .wrapper-img {
        width: 50%;
    } 
    .wrapper-text {
        display: flex;
        align-items: center;
        line-height: 2.5em;
        text-align: center;

    } p {
        font-style: italic;
        font-size: 1.3em;
        margin: 0;
    }
    .wrapper-img {
        text-align: right;
    }
    #container-news {
        display: none;
        padding: 50px;
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
