<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
          <span class="title">
              {{shop.name}}
          </span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sell">
                  <div class="sells-count">
                      {{shop.sells|sellCountFilter}}
                  </div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shop.goodsCount}}
                  </div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="(item, index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" 
                      :class="{'scroll-better':item.isBetter}">
                      {{item.score}}</td>
                        <td class="better" 
                      :class="{'better-more':item.isBetter}">
                      <span>{{item.isBetter ? "高":"低"}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
name:"detailShopInfo",
props:{
    shop:{
        type:Object,
    }
},
filters:{
    sellCountFilter:function(value){
        if(value<10000)return value;
        return(value/10000).toFixed(1)+"万"
    }
}
}
</script>

<style scoped>
.shop-info{
    padding: 25px 8px 2px;
    border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
}
.shop-top .title{
    margin-left: 10px;
}
.shop-middle{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.shop-middle-left{
display: flex;
justify-content: space-evenly;
color: #333;
text-align: center;
padding-right: 25px;
border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count,.goods-count{
    font-size: 18px;
    padding: 0 10px;
}
.sells-text,.goods-text{
    font-size: 13px;
    margin-top: 10px;
    padding: 0 10px;
}
.shop-middle-right{
    font-size: 13px;
    color: #333;
}
.shop-middle-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-middle-right table td{
    padding: 5px 0;
}
.shop-middle-right .score{
    color: #5ea732;
}
 .shop-middle-right .scroll-better{
    color: #f13e3a;
}
.shop-middle-right .better span{
     background-color: #5ea732;
     color:#fff;
     text-align: center;
}
.shop-middle-right .better-more span{
     background-color: #f13e3a;
     
}
.shop-bottom{
    width: 120px;
    line-height: 36px;
    background: rgba(230, 228, 228,.4);
    text-align: center;
    margin: 15px auto;
}
.enter-shop{
    font-size: 15px;
    color: rgb(146, 143, 143);
}
</style>