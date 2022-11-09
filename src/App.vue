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
    overflow: auto;
  }
  .footer{
    text-align: center;
    background: white;
    padding: 18px;
  }

  @media (max-width: 700px){
    .footer{
      padding: 15px;
    }
  }
</style>