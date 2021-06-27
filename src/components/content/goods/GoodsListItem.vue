<template>
  <div class="GoodListItem" @click="itemclick">
<img :src="showImages"  @load="imageLoad">
 <div class="goods-info">
<p>{{goodsItem.title}}</p>
<span class="price">{{goodsItem.price}}</span>
<span class="collect">{{goodsItem.cfav}}</span>
</div>
  </div>
</template>

<script>
export default {
name:"GoodListItem",
props:{
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
},
computed:{
  showImages(){
    return this.goodsItem.image || this.goodsItem.show.img
  }
},

methods:{
  imageLoad(){
    this.$bus.$emit("itemImageLoad")
  },
  itemclick(){
    //console.log("监听详情页");
    //console.log(this.goodsItem.iid);
   this.$router.push({name:'detail',params:{id:this.goodsItem.iid}})
  }  
}
}
</script>

<style>
.GoodListItem{
    width: 50%;
    font-size: 12px;
}
.GoodListItem img{
    width: 100%;
    height: 270px;
    padding: 6px;
}
.goods-info p{
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.price{
  font-size: 18px;
    color: crimson;
    margin-left: 3px;
}
.goods-info .collect {
    position: relative;
    left: 18px;
  }
.goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>