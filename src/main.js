import { createApp } from "vue";
import { createPinia } from "pinia";

// import Vue from 'vue';
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// import VueAxios from 'vue-axios'
// import axios from './backend/axios'
// import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'
import axios from './backend/axios'

import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
import VueAxios from 'vue-axios'


// new Vue({
//   el: '#app',
//   router,
//   axios,
//   components: { App },
//   template: '<App/>'
// })


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.productionTip = false
// app.use(VueAxios, {
//   secured: securedAxiosInstance,
//   plain: plainAxiosInstance
// })

app.use(VueAxios, axios)

app.mount("#app");
