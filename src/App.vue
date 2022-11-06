<template>
  <a-layout :style="{height: '100vh'}">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', lineHeight: '64px', display: 'flex', justifyContent: 'space-between'}">
      <span>Logo</span>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
      >
        <a-menu-item key="1">Home</a-menu-item>
        <a-menu-item key="2">Products</a-menu-item>
        <a-menu-item key="3">Stores</a-menu-item>
        <a-menu-item key="4">Register</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ marginTop: '64px', padding: '0px 20px', width: '100%'}">
      <router-view/>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      selectedKeys: ['1'],
    }
  }
}

</script>

<style>
</style>