<script>
export default {
    name: 'AppBnW',
}

</script>
<template>
    <div id="gallery-view-wrapper">
        <h2 id="gallery-view-title">NATURE IN BLACK AND WHITE</h2>
        <div id="gallery-view">
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
            <div class="view-img"></div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    #gallery-view-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        min-height: calc(100vh - 106px);
    }
    #gallery-view-title {
        font-size: 3em;
    }
    #gallery-view{
        display: flex;
        flex-wrap: wrap;
        max-width: 1030px;
        gap: 20px;
    } .view-img {
        min-width: 190px;
        min-height: 150px;
        background-color: aqua;
    }
</style>