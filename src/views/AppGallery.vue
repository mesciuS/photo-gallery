<script>
export default {
    name: 'AppGallery',
}

</script>
<template>
    <div>
        <div class="gallery-img">
            <h1>qui va l'immagine della galleria</h1>
        </div>
        <div class="gallery-name">
            <h1>GALLERY</h1>
        </div>
        <div id="gallery-wrapper" class="d-flex flex-wrap pt-0 pb-5 justify-content-evenly row-gap-3">
            <div class="gallery-square">
                <div class="inner-square">
                    <h3>
                        tipo di foto
                    </h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="inner-square">
                    <h3>
                        tipo di foto
                    </h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="inner-square">
                    <h3>
                        tipo di foto
                    </h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="inner-square">
                    <h3>
                        tipo di foto
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .gallery-img {
        height: 80vh;
        background-color: beige;
    }

    h1 {
        text-align: center;
    }
    .gallery-name {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }
    #gallery-wrapper {
        margin-left: 8%;
        margin-right: 8%;
        // margin: auto;
    }   
        .gallery-square {
            width: 300px;
            height: 150px;
            background-color: bisque;
        }
    
    @media screen and (max-width: 576px) {
        #gallery-wrapper {
            margin: 0;
        }
    }
    @media screen and (max-width: 992px) {
        #gallery-wrapper {
            margin: 0;
        }
    }
</style>