<script>
export default {
    name: 'AppGallery',
}

</script>
<template>
    <div>
        <div class="route-img">
            <!-- <img id="gallery-cover" src="" alt=""> -->
        </div>
        <div class="route-name">
            <h1>GALLERY</h1>
        </div>
        <div id="gallery-wrapper" class="d-flex flex-wrap pt-0 justify-content-evenly row-gap-3">
            <div class="gallery-square">
                <div class="gallery-square-img">
                    <h3>tipo di foto</h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="gallery-square-img">
                    <h3>tipo di foto</h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="gallery-square-img">
                    <h3>tipo di foto</h3>
                </div>
            </div>
            <div class="gallery-square">
                <div class="gallery-square-img">
                    <h3>tipo di foto</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    #gallery-wrapper {
        margin-left: 8%;
        margin-right: 8%;
        padding-bottom: 70px;
    }   
        .gallery-square {
            width: 300px;
            height: 150px;
            box-shadow: 2px 2px 10px grey;
            overflow: hidden;
        } .gallery-square-img {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            transition: transform .5s;
            background: url("https://picsum.photos/200/300");
        } .gallery-square-img:hover {
            transform: scale(1.1);
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