import { createApp } from "vue";
import { createPinia } from "pinia";
import BootstrapVue3,{BToastPlugin} from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(BootstrapVue3);
app.use(BToastPlugin);
app.use(createPinia());
app.use(router);
app.mount("#app");