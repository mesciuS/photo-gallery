<script>
export default {
    name: 'AppHome',
}

</script>
<template>
    <div id="view-container">
        <div class="square">
            <img src="/public/images/_W1B1708.jpg" alt="immagine copertina">
        </div>
        <div>
            <h1>sezione secondaria del sito desktop o sezione che si vede solo da visualizzazione mobile</h1>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .square {
        width: 100%;
        // height: 100vh;
        height: calc(100vh - 106px);

        background-color: aqua;
    }
    img {
        width: 100%;
        height: calc(100vh - 106px);
    }
</style>
