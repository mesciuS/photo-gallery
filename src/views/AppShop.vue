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
                        <th scope="col">Print size</th>
                        <th scope="col">Hahnemühle photo rag- 100% white cotton</th>
                        <th scope="col">Canvas - not framed</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>30x20 cm</td>
                        <td>€ 50</td>
                        <td>N.A.</td>
                    </tr>
                    <tr>
                        <td>45x30 cm</td>
                        <td>€ 60</td>
                        <td>N.A.</td>
                    </tr>
                    <tr>
                        <td>60x40 cm</td>
                        <td>€ 130</td>
                        <td>€ 100</td>
                    </tr>
                    <tr>
                        <td>80x40 cm</td>
                        <td>N.A.</td>
                        <td>€ 140</td>
                    </tr>
                    <tr>
                        <td>120x80 cm</td>
                        <td>N.A.</td>
                        <td>€ 340</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="form-wrapper">
            <h5>Requests</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ex cupiditate a repudiandae iste libero exercitationem vel fugiat veritatis tempore hic sapiente, nostrum itaque adipisci beatae! Ab ipsa saepe labore?</p>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Name" required>
            </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Email" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            <input type="submit" value="Submit" class="btn btn-outline-warning">
        </div>
    </div>
</template>
<style scoped lang="scss">
    #table-wrapper {
        padding: 50px 100px;
    }
    table {
        text-align: center;
    }
    #form-wrapper {
        padding: 50px 100px;
    } .row {
        margin-bottom: 30px;
    }
</style>