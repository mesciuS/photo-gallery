<script>
export default {
    name: 'AppShop',
}

</script>
<template>
    <div>
        <div class="route-img">
            <img id="route-cover" src="../assets/images/gallery/purchase-cover.jpg" alt="purchase-cover">
        </div>
        <div class="route-name">
            <h1>purchase images</h1>
        </div>
        <div id="table-wrapper">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped lang="scss">
    #table-wrapper {
        padding: 50px 100px;
    }
</style>