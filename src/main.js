
import { createApp } from 'vue'
import App from './App.vue'
import './Style.scss'
import {router} from './router';
import * as bootstrap from 'bootstrap';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
// library.add(faUserSecret);

const app = createApp(App)

app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


