<template>
  <div class="detailNavbar">
      <nav-bar>
          <template v-slot:left :style="{backgroundcolor:red}" @click="backClick"> 
              <div  @click="backClick">
            <img src="~assets/img/common/back.svg" class="backimg">
            </div>
          </template>
          <template v-slot:center >
              <div class="title">
             <div v-for="(item,index) in title" 
             :key="index"
             class="title-item"
             :class="{actived:index===currentindex}"
             @click="titleClick(index)">
           {{item}}
             </div>
             </div>
          </template>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
name:"detailNavbar",
components:{
   NavBar 
},
data(){
    return {
        title:["商品","参数","评论","推荐"],
        currentindex:0
    }
},
methods:{
    titleClick(index){
    this.currentindex=index;
    this.$emit("titleClick",index)
    },
    backClick(){
        this.$router.back()
    }
}
}
</script>

<style scoped>
.detailNavbar{
    position: relative;
    z-index: 10;
    background: #fff;
}
.title{
    display: flex;
    justify-content: space-around;
}
.actived{
color: pink;
}
.backimg{
    margin-top: 12px;
}
</style>