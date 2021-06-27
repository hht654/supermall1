<template>
  <div class="bottom-bar">
<div class="bar-item bar-left">
    <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
    </div>
    <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
    </div>
    <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
    </div>
</div>
<div class="bar-item bar-right">
    <div class="cart" @click="addtocart">加入购物车</div>
    <div class="buy">立即购买</div>
</div>
  </div>
</template>

<script>
export default {
name:"detailbottomBar",
methods:{
    addtocart(){
        this.$emit("addtoCard")
    }
}
}
</script>

<style scoped>
.bottom-bar{
    display: flex;
    text-align: center;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 11;
    height: 60px;
 
}
.bar-item{
    flex: 1;
    display: flex;
}
.bar-item>div{
 flex: 1;
}
.bar-left .text{
    font-size: 13px;
}
.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 12px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
    background-position: 0 -54px;
}
.bar-left .shop{
    background-position: 0 -98px;
}
.cart{
    text-align: center;
    background: gold;
    color: rgb(2, 2, 2);
    line-height: 60px;
}
.buy{
    background: hotpink;
    color: #fff;
    text-align: center;
      line-height: 60px;
}
</style>

