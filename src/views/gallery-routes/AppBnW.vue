<script>
import { bnwImages } from '../../store.js'
export default {
    name: 'AppBnW',
    data() {
        return {
            imagePaths: bnwImages
        }
    },
}

</script>
<template>
    <div id="gallery-view-wrapper">
        <h2 id="gallery-view-title">nature in black and white</h2>
        <div id="gallery-view">
            <div class="view-img" v-for="(image, index) in imagePaths" :key="index">
                <img :src="image" alt="black & white" class="view-img-inner" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </div>
        </div>

        <!-- modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="custom-modal-content">
                    <img class="modal-img" src="src\assets\images\gallery\black&white\b&w_16.jpg" alt="">
                    <div class="custom-modal-footer">
                        <p class="modal-number">1/16</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    
</style>