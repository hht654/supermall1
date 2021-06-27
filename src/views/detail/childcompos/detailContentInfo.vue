<template>
  <div v-if="Object.keys(content).length!==0" class="detailContent">
      <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{content.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{content.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in content.detailImage[0].list"
          :key="index" 
          :src="item" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
name:"detailContentInfo",
props:{
    content:{
        type:Object,
        default(){
            return {}
        }
    }
},
data(){
    return {
        counter:0,
        imagesLength:0
    
    }
},
methods:{
    imgLoad(){
      // console.log("加载完成");
        if(++this.counter === this.imagesLength){
            this.$emit("imageload");
        }
    }
    
},
watch:{
   content(){          //侦听器，监听content（某个属性）的变化
        this.imagesLength=this.content.detailImage[0].list.length;
        console.log(this.imagesLength);
    }
}
}
</script>

<style>
.info-list img{
    width: 100%;
}
</style>