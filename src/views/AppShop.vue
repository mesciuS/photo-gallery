<script>
import emailjs from '@emailjs/browser';
export default {
    name: 'AppShop',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_3u0vpz4', 'template_44u61fz', this.$refs.form, 'Gd2-NYPPSKC_HmMi6')
                .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
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
            <form ref="form" @submit.prevent="sendEmail">
                <h5>Requests</h5>
                <p>If you want to purchase any of my photos or have any questions, please fill out the form below to contact me directly.</p>
                <div class="row">
                    <div class="col">
                        <input type="text" v-model="name" name="name" class="form-control" placeholder="Your Name" required>
                </div>
                    <div class="col">
                        <input type="email" v-model="email" name="email" class="form-control" placeholder="Your Email" required>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea v-model="message" name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <input type="submit" value="Send" class="btn btn-outline-warning">
            </form>
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

    @media screen and (max-width: 576px) {
        #table-wrapper {
            padding: 0px 10px 10px 10px;
        }
        #form-wrapper {
            padding: 10px;
        }
    }
</style>