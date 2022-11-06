<template>
  <a-layout :style="{height: '100vh'}">
    <a-layout-header class="header">
      <div class="d-flex justify-content-between">
        <span class="fw-bold">Ecommerce Shop</span>
        <a-menu class="d-none d-sm-block" style="width: 350px" v-model:selectedKeys="selectedKeys" mode="horizontal">
          <a-menu-item key="1">Home</a-menu-item>
          <a-menu-item key="2">Products</a-menu-item>
          <a-menu-item key="3">Stores</a-menu-item>
          <a-menu-item key="4">Register</a-menu-item>
        </a-menu>
        <a-menu class="d-block d-sm-none" style="width: 80px" :trigger="['click']" v-model:selectedKeys="selectedKeys" mode="horizontal">
          <a-sub-menu>
            <template #title>
              <span class="fw-bold">Menu</span>
            </template>
            <a-menu-item key="1">Home</a-menu-item>
            <a-menu-item key="2">Products</a-menu-item>
            <a-menu-item key="3">Stores</a-menu-item>
            <a-menu-item key="4">Register</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view/>
    </a-layout-content>
    <a-layout-footer class="footer">
      Ecommerce Shop ©2022
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { MenuOutlined } from '@ant-design/icons-vue';
export default {
  name: "App",
  data(){
    return {
      selectedKeys: ['1'],
      navWidth: 0,
      mobileNavWidth: 0,
    }
  },
  mounted() {

  },
  methods: {
  },
  components: {
    MenuOutlined
  }
}
</script>

<style lang="css" scoped>
  .header{
    width: 100%;
  }
  .content{
    width: 100%;
  }
  .footer{
    text-align: center;
  }
</style>