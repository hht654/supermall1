<template>

 <swiper class="query2"> 
  <swiper-item v-for="(item,index) in topImages" :key="index" > 
     <img :src="item">
  </swiper-item>
 </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
name:"detailSwiper",
props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
},
components:{
    Swiper,
     SwiperItem
}
}
</script>

<style>
.query2{
    height: 300px;
}
</style>