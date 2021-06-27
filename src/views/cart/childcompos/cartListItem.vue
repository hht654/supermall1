<template>
  <div class="shop-item">
      <div class="item-selector">
        <checkbutton 
        :is-checked="itemInfo.checked"
         @click.native="checkClick"></checkbutton>
      </div>
      <div class="item-img">
          <img :src="itemInfo.image" alt="">
      </div>
      <div class="item-info">
          <div class="item-title"> {{itemInfo.title}}</div>
          <div class="item-desc"> {{itemInfo.desc}}</div>
          <div class="item-bottom"> 
             <div class="item-price left">￥{{itemInfo.lowprice}}</div>
             <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
          </div>
       </div>   
</template>

<script>
import checkbutton from "components/content/checkbutton/checkbutton"
export default {
name: "cartListItem",
props:{
    itemInfo:{
        type:Object,
        default(){
            return {}
        }
    }
},
components:{
 checkbutton
},
methods:{
    checkClick(){
        this.itemInfo.checked=!this.itemInfo.checked
    }
}
}
</script>

<style scoped>
.shop-item{
    width: 100%;
    display: flex;
   
    padding:5px;
    border-bottom: 1px solid #ccc;
}
.item-selector{
    width: 25px;
   margin: auto 1px;
}
.item-img img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
    margin: auto 3px;
}
.item-info{
    font-size: 17px;
    color: #333;
    padding:5px 10px;
    position: relative;
      overflow: hidden;
}
.item-info .item-desc{
    font-size: 14px;
    columns: #666;
    margin-top: 15px;
}
.item-title , .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 .item-bottom{
    position: absolute;
    bottom: 1px;
    border-left-width: 10px;
    height: 30px;
    width: 100%;
}
.item-bottom .item-price{
    color: orangered;
    
}
.right{
    float: right;

}
</style>