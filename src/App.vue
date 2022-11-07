<template>
  <a-layout :style="{height: '100%'}">
    <a-layout-header v-if="this.$route.meta.layout" class="header shadow-sm">
      <div class="d-flex justify-content-between">
        <span class="fw-bold">Ecommerce Shop</span>
        <desktop-nav class="d-none d-sm-block" :selectedKeys="[this.$route.name]"/>
        <mobile-nav class="d-block d-sm-none" :selectedKeys="[this.$route.name]"/>
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <a-breadcrumb v-if="this.$route.meta.layout" class="p-2 d-block d-sm-none">
        <a-breadcrumb-item>page</a-breadcrumb-item>
        <a-breadcrumb-item>{{this.$route.name}}</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view/>
    </a-layout-content>
    <a-layout-footer class="footer">
      Ecommerce Shop ©{{new Date().getFullYear()}}
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { MenuOutlined } from '@ant-design/icons-vue';
import DesktopNav from '@/layouts/DesktopNav.vue'
import MobileNav from '@/layouts/MobileNav.vue'
export default {
  name: "App",
  data(){
    return {
      navWidth: 0,
      mobileNavWidth: 0,
    }
  },
  methods: {
  },
  components: {
    MenuOutlined,
    DesktopNav,
    MobileNav,
  }
}
</script>

<style lang="css" scoped>
  .header{
    width: 100%;
  }
  .content{
    width: 100%;
    background: white;
  }
  .footer{
    text-align: center;
    background: white;
  }
</style>