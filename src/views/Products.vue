<template>
  <div class="card-main d-flex h-100">
    <a-card class="card-left">
      <div class="d-none d-sm-block">
        <filters/>
      </div>
      <div class="d-block d-sm-none">
        <filter-outlined class="icon" @click.prevent="visible = true"/>
      </div>
    </a-card>
    <a-card class="card-right">
      <span>List</span>
    </a-card>
  </div>
    <a-drawer
      v-model:visible="visible"
      title="Filter"
      width="300px"
      placement="left"
    >
      <filters/>
    </a-drawer>
</template>

<script>
import Filters from '@/components/Products/Filters.vue'
import { FilterOutlined } from '@ant-design/icons-vue';
export default {
  name: 'HomeView',
  data(){
    return {
      visible: false,
    }
  },
  components: {
    Filters,
    FilterOutlined,
  }
}
</script>

<style scoped>
  .card-left {
    min-width: 260px;
    height: 100%;
  }
  .card-right{
    height: 100%;
    width: 100%;
  }
  .icon{
    font-size: 22px
  }
  @media (max-width: 576px){
      .card-main{
        flex-direction: column;
      }
      .card-left{
        height: 80px;
      }
  }
</style>
