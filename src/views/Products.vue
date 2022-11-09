<template>
  <div class="card-main d-flex h-100" ref="containerRef">
    <a-card class="card-left">
      <div class="d-none d-sm-block">
        <filters/>
      </div>
      <div class="d-block d-sm-none">
        <filter-outlined class="icon" @click.prevent="visible = true"/>
      </div>
    </a-card>
    <a-card class="card-right">
        <a-card-grid class="card-item" :hoverable="false">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
        <a-card-grid class="card-item">Content</a-card-grid>
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
  }
  .card-right{
    height: 100%;
    width: 100%;
    overflow: auto;
  }
  .icon{
    font-size: 22px
  }
  .card-item{
    height: 250px;
    width: 20%;
    text-align: center;
    overflow: auto;
  }

  @media (max-width: 1400px){
    .card-item{
      height: 200px;
    }
  }

  @media (max-width: 1200px){
    .card-item{
      height: 150px;
      width: 25%;
    }
  }

  @media (max-width: 900px){
    .card-item{
      height: 140px;
      width: 33.3%;
    }
  }

  @media (max-width: 700px){
    .card-item{
      height: 130px;
      width: 50%;
    }
  }

  @media (max-width: 575.98px){
    .card-main{
      flex-direction: column;
    }
    .card-item{
      height: 150px;
    }
  }
</style>
