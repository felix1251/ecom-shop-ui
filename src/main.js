import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import BootstrapVue3 from 'bootstrap-vue-3'

import 'ant-design-vue/dist/antd.css'
import './assets/antd-custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(BootstrapVue3);
appInstance.use(router);
appInstance.use(Antd)
appInstance.mount("#app");
