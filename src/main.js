
import { createApp } from 'vue'
import App from './App.vue'
import './Style.scss'
import {router} from './router';
import * as bootstrap from 'bootstrap';

const app = createApp(App)

app.use(router)

app.mount('#app')

// scrollBehavior () {
//     return new Promise((resolve) => {
//         resolve({ left: 0, top: 0})
//     })
// }