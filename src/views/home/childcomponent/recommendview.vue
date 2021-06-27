<template>
  <div class="recommend">
  <div v-for="(item,index) in recommends" :key='index'>
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
        </a>
  </div>
  </div>
</template>

<script>
export default {
  name:"recommendview",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
  
}
</script>

<style>
.recommend{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
.recommend img{
  width: 70px;
}
</style>