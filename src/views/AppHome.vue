<script>
export default {
    name: 'AppHome',
}

</script>
<template>
    <div id="view-container">
        <div class="square">
            <img src="../assets/images/_W1B1708.jpg" alt="immagine copertina">
        </div>
        <div>
            <h1>sezione secondaria del sito desktop o sezione che si vede solo da visualizzazione mobile</h1>
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
    img {
        width: 100%;
        height: auto;
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
