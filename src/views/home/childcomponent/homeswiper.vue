<template>
<div>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key='index'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="Imageload">
        </a>
    </swiper-item>
  </swiper>
  </div> 
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
name:'homeswiper',
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
components:{
    Swiper,
    SwiperItem
},
data(){
  return {
    isLoad:false
  }
},
methods:{
 Imageload(){
   if(!this.isLoad)
    this.$emit("swiperImgLoad")
    this.isLoad=true
  }
}
}
</script>

<style>

</style>