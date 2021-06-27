<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
  <div class="info-title">{{goods.title}}</div> 
  <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <span class="info-service-item"
         v-for="index in goods.services.length-1"
          :key="index">
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name }}</span>
          </span>
    </div>
  </div>
</template>

<script>
export default {
name:"detailBaseInfo",
props:{
    goods:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style scoped>
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color: #222;
}
.info-price{
    margin-top: 10px;
    vertical-align: baseline;
}
.n-price{
    font-size: 24px;
    color: sandybrown;
}
.o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.discount{
    border: 4px solid sandybrown;
    text-align: center;
    color:#fff;
    margin-left: 5px;
    background: sandybrown;
    border-radius: 25%;
}
.info-other,.info-service{
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  flex-flow: nowrap;
}
.info-other{
    font-size: 15px;
    margin-top: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f2f5f8;
}
.info-service{
    padding: 10px 0;
}
.info-service-item{
    flex: 0,1;
     font-size: 14px;
    color: #222;
}
.info-service-item img{
    height: 10px;
    width: 10px;
}
</style>