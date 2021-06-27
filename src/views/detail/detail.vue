<template>
  <div class="detail">
      <detail-navbar @titleClick="titleClick" ref="nav"/>
     <scroll class="query3" :probe-type="3" :pull-up-load="true"
      ref="scroll" @scroll="detailScroll">
       <detail-swiper :topImages="topImages"> </detail-swiper>
       <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-content-info :content="content"
        @imageload="imageload" ref="content"></detail-content-info>
        <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
         <detail-comment-info ref="comments" :commentInfo="commentInfo"/>
         <goods-list :goods="recommends" ref="recommend"></goods-list>
        
      </scroll>
       <backtop @click.native="bactopClick" v-show="isshowBackTop"></backtop>
       <detailbottom-bar @addtoCard="addCard"/>
  </div>
</template>

<script>
import scroll from "components/common/scrool/scroll"
import detailNavbar from "views/detail/childcompos/DetailNavBar"
import {getDetail,Goods,Shop,Goodsparam,getRecommend} from "network/detail"
import detailSwiper from "views/detail/childcompos/detailswiper"
import detailBaseInfo from "views/detail/childcompos/detailBaseInfo"
import detailShopInfo from "views/detail/childcompos/detailshopInfo"
import detailContentInfo from "views/detail/childcompos/detailContentInfo"
import detailParamInfo from "views/detail/childcompos/detailParamInfo"
import detailCommentInfo from "views/detail/childcompos/detailCommentInfo"
import GoodsList from 'components/content/goods/GoodsList'
import detailbottomBar from "views/detail/childcompos/detailbottomBar"
import {backTopMixin} from "common/mixin"
export default {
name: "detail",
data(){
    return{
        id:null,
        topImages:[],
        goods:{},
        shop:{},
        content:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        currentindex:0
    }
},
mixins:[backTopMixin],
components:{
  scroll,
  detailNavbar,
 detailSwiper,
 Goods,
 detailBaseInfo,
 Shop,
 detailShopInfo,
 detailContentInfo,
 Goodsparam,
 detailParamInfo,
  detailCommentInfo,
  GoodsList,
  detailbottomBar
},
created(){
    console.log(this.$route.params)
    this.id=this.$route.params.id
    console.log(typeof this.id);
    getDetail(this.id).then(res=>{
      console.log(res);   
      const data =res.data.result;
       this.topImages=data.itemInfo.topImages;
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      this.shop=new Shop(data.shopInfo);
      this.content=data.detailInfo;
      this.paramInfo=new Goodsparam(data.itemParams.info,data.itemParams.rule);
      this.commentInfo=data.rate.list[0];
     
        
      
     

    })
    getRecommend().then(res=>{
      //console.log(res);
       this.recommends=res.data.data.list
    })
},


methods:{
  imageload(){
   // console.log('---');
   this.$refs.scroll.refresh()
    this.themeTopYs=[]
    this.themeTopYs.push(0)
       this.themeTopYs.push(this.$refs.params.$el.offsetTop)
       this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
       this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
       console.log(this.themeTopYs);
  },
  titleClick(index){
   this.$refs.scroll.scrollTo(0, -(this.themeTopYs[index]-46),100)
  },
  detailScroll(position){
    const positionY=-position.y;
    //console.log(positionY);
    for(let i=0;i<this.themeTopYs.length;i++){
    if(this.currentindex!==i&&
    ((i<this.themeTopYs.length-1&&
    positionY>=(this.themeTopYs[i]-46)&&
    positionY<(this.themeTopYs[i+1]-46))||
    (i==this.themeTopYs.length-1&&positionY>=(this.themeTopYs[i]-46)))){
     console.log(i);
     this.currentindex=i;
     this.$refs.nav.currentindex=this.currentindex;
      this.isshowBackTop=(-position.y)>1000;
    }   
      }
      },
  addCard(){
    //获取购物车需要展示的信息
    const product={};
    product.image=this.topImages[0];
    product.title=this.goods.title;
    product.desc=this.goods.desc;
    product.price=this.goods.newPrice;
    product.lowprice=this.goods.realPrice
    product.id=this.id;
    //product.count=0;每点击一次，product的count会刷新为0
    //将商品添加到购物车
    this.$store.commit("addCart",product);
    console.log(this.$store.state.cartList);
  }
  }
}



</script>

<style>
.detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.query3{
  height: calc(100% - 106px);
  overflow:hidden
}
</style>  