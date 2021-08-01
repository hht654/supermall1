<template>
<div id="home">
  <nav-bar class="homenav">
    <template v-slot:center>
       <div class="text">购物街</div> 
    </template>
  </nav-bar>
   <tab-control 
     :titles="['流行','新款','精选']" 
     class="tabcontrol"
     ref="tabControl1"
     @tabClick="tabClick" v-show="isTabfixed"> </tab-control>
  <scroll class="quer1" ref="scroll" :probe-type="3" @scroll="contentScroll"  :pull-up-load="true" @pullingUp="loadMore">
   <homeswiper :banners="banners" @swiperImgLoad="swiperImgLoad"></homeswiper> 
    <recommendview :recommends="recommends"></recommendview>
    <featureview/> 
     <tab-control 
     :titles="['流行','新款','精选']" 
      ref="tabControl2"
     class="tabcontrol"
     @tabClick="tabClick"> </tab-control>
      <goods-list :goods="showGoods"></goods-list>
      </scroll>
   <backtop @click.native="bactopClick" v-show="isshowBackTop"></backtop>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import {getHomeMultidata, getHomeGoods} from 'network/home'
import homeswiper from  './childcomponent/homeswiper'
import recommendview from './childcomponent/recommendview'
import featureview from './childcomponent/featureview'
import tabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
import scroll from "components/common/scrool/scroll"
import {backTopMixin} from "common/mixin"
export default {
name:"home",  
components:{
  NavBar,
  homeswiper,
  recommendview,
  featureview,
  tabControl,
  GoodsList,
  scroll,
 
},
mixins:[backTopMixin],
data(){
  return {
    banners:[],
    recommends:[],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:"pop",
  
    tabOffsetTop:0,
    isTabfixed:false,
    saveY:0
  } 
},
 computed:{
   showGoods(){
     return this.goods[this.currentType].list
   }
 },
//在创建完成时发送网络请求
created(){
  //1.请求多个数据
   this.getHomeMultidata();
   //2.请求商品数据
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  
},
 mounted(){
     //3.监听item中图片加载完成
this.$bus.$on("itemImageLoad",()=>{
  console.log("mmmmm");
   this.scroll&& this.$refs.scroll.refresh()    //注意ref要在组件挂载完以后获取
 })
 },
 deactivated() {
  console.log("deactived");
  this.saveY = this.$refs.scroll.getScrollY()
},
 activated() {
   console.log("actived");
 this.$refs.scroll.scrollTo(0,this.saveY,1);
 //this.$refs.scroll.refresh()
},

methods:{

  /*事件监听相关的方法 */
  tabClick(index){
    switch(index){
     case 0:
       this.currentType='pop';
       break;
       case 1:
       this.currentType='new';
       break;
       case 2:
       this.currentType='sell';
    };
    this.$refs.tabControl1.currentindex=index;
    this.$refs.tabControl2.currentindex=index;
    this.$refs.scroll.scrollTo(0,-545,500)
},
 
contentScroll(position){
  this.isshowBackTop=(-position.y)>1000;
  //决定TabControl是否吸顶
   this.isTabfixed=(-position.y)>this.tabOffsetTop;
},
loadMore(){
  console.log("HAHA");
  this.getHomeGoods(this.currentType)
},
swiperImgLoad(){
  this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
},
/*网络请求是相关的方法*/  
   getHomeMultidata(){
     getHomeMultidata().then(res=>{
    console.log(res);
     this.banners=res.data.data.banner.list;    
     this.recommends=res.data.data.recommend.list;
   })
   },
   getHomeGoods(type){
     const page=this.goods[type].page+1;
     getHomeGoods(type,page).then(res=>{
     console.log(res);
     this.goods[type].list.push(...res.data.data.list);
     this.goods[type].page += 1;
      this.$refs.scroll.finishPullUp()
   })    
}

}
}

</script>

<style scoped>
#home{
  height: 100vh;
}
#home .text{
  color: #fff;
    font-size: 18px;
}
.homenav{
  position: sticky;
  top: 0;
  z-index: 2;
  background: pink;
}
.tabcontrol{
  position: sticky;
  top: 46px;
   z-index: 3;
 
   background: #fff;
}
.quer1{
  height: calc(100% - 95px);
  overflow:hidden
}
</style>
