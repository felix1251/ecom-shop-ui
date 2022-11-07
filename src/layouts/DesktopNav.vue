<template lang="">
  <a-menu
    style="width: 350px"
    v-model:selectedKeys="selectedKeys"
    mode="horizontal"
  >
    <a-menu-item key="home">
      <router-link class="menu-item" to="/" exact>Home</router-link>
    </a-menu-item>
    <a-menu-item key="products">
      <router-link class="menu-item" to="/products">Products</router-link>
    </a-menu-item>
    <a-menu-item key="3">Stores</a-menu-item>
    <a-menu-item key="4">Sign In</a-menu-item>
  </a-menu>
</template>
<script>
export default {
  props:{
    selectedKeys: {type: Array, default: []}
  }
};
</script>

