<template>
    <a-carousel autoplay>
      <div><h3>image 1</h3></div>
      <div><h3>image 2</h3></div>
      <div><h3>image 3</h3></div>
      <div><h3>image 4</h3></div>
    </a-carousel>
    <a-card title="Trending Products">
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
      <a-card-grid class="card-item">Content</a-card-grid>
    </a-card>
</template>
<script>
export default {
  name: 'HomeView',
  data(){
    return {
      count: 8,
    }
  }
}
</script>
<style scoped>
  .ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 300px;
    line-height: 170px;
    background: #364d79;
    overflow: hidden;
    color: #fff;
  }
  .ant-carousel :deep(.slick-slide h3) {
    
  }
  .card-item{
    height: 150px;
    width: 25%;
    text-align: center;
  }
  
  @media (max-width: 575.98px) {
    .ant-carousel :deep(.slick-slide){
      line-height: 110px;
      height: 200px;
    }
    .card-item{
      height: 110px;
      width: 50%;
    }
  }
</style>
