<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key='index' 
    class="tab-control-item"
    :class="{active:index===currentindex}"
    @click="itemclick(index)">
        <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
name:'tabControl',
props: {
    titles:{
        type:Array,
        default(){
            return []
        }
    }
},
data(){
  return{
    currentindex:0
  }
},
methods:{
  itemclick(index){
   this. currentindex=index;
   this.$emit("tabClick",index)
  }
}
}
</script>

<style>
.tab-control{
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  
}
.active{
  color:rgb(240, 77, 77);
  border-bottom: 3px solid rgb(240, 77, 77) ;

}

</style>