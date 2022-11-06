import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import './assets/antd-custom.css'

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(Antd)
appInstance.mount("#app");
