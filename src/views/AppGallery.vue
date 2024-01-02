<script>
export default {
    name: 'AppGallery',
}

</script>
<template>
    <div>
        <div class="route-img">
            <img id="route-cover" src="../assets/images/gallery/gallery-cover.jpg" alt="gallery-cover">
        </div>
        <div class="route-name">
            <h1>gallery</h1>
        </div>
        <div id="gallery-wrapper" class="d-flex flex-wrap pt-0 justify-content-evenly row-gap-3">
            <router-link :to="{ name: 'bnw'}">
                <div class="gallery-square">
                    <div class="gallery-square-img class-bw">
                        <h3>Nature in B&W</h3>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ name: 'wildlife'}">
                <div class="gallery-square">
                    <div class="gallery-square-img class-wildlife">
                        <h3>Wildlife</h3>
                    </div>
                </div>
            </router-link>          
            <router-link :to="{ name: 'landscapes'}">
                <div class="gallery-square">
                    <div class="gallery-square-img class-landscapes">
                        <h3>Landscapes</h3>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ name: 'artic'}">
                <div class="gallery-square">
                    <div class="gallery-square-img class-artic">
                        <h3>Arctic vibes</h3>
                    </div>
                </div>
            </router-link>
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
        } .gallery-square-img:hover {
            transform: scale(1.1);
        } 
        h3 {
            text-shadow: 1px 1px 1px black;
        }
        .class-bw {
            background: url("../assets/images/gallery/black&white/b&w_cover.jpg");
            background-size: cover;
        }
        .class-wildlife {
            background: url("../assets/images/gallery/wildlife/wildlife_cover.jpg");
            background-size: cover;
        }
        .class-landscapes {
            background: url("../assets/images/gallery/landscapes/landscapes_cover.jpg");
            background-size: cover;
        }
        .class-artic {
            background: url("../assets/images/gallery/artic/artic_cover.jpg");
            background-size: cover;
        }
    @media screen and (max-width: 576px) {
        #gallery-wrapper {
            margin: 0;
        }
        .route-img {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: auto;
        }
    }
    @media screen and (max-width: 992px) {
        #gallery-wrapper {
            margin: 0;
        }
    }
</style>