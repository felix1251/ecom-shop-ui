import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import BootstrapVue3 from 'bootstrap-vue-3'
import vue3GoogleLogin from 'vue3-google-login'
import { plainAxiosInstance, securedAxiosInstance } from "@/backend"

import 'ant-design-vue/dist/antd.css'
import './assets/antd-custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const clientId = process.env.VUE_APP_GOOGLE_AUTH_KEY

const appInstance = createApp(App);
appInstance.use(vue3GoogleLogin, {clientId: clientId, scoped: 'email', prompt: false})
appInstance.use(store);
appInstance.use(BootstrapVue3);
appInstance.use(router);
appInstance.use(Antd)
appInstance.config.globalProperties.$plain = {...plainAxiosInstance}; 
appInstance.config.globalProperties.$secured = {...securedAxiosInstance};
appInstance.mount("#app");
