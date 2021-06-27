<template>
  <div class="button-bar">
      <div class="check-all">
      <checkbutton 
      class="check-button"
      :isChecked="isSelectAll"
      @click.native="checkall"
      ></checkbutton>
       <span>全选</span>
      </div>
      <div class="price">
          合计：{{totalPrice}}
      </div>
      <div class="calculate">
          去计算({{checkLength}})
      </div>
  </div>
</template>

<script>
import checkbutton from "components/content/checkbutton/checkbutton"
import { mapGetters } from 'vuex'
export default {
name:"cartButtonBar",
components:{
    checkbutton
},
computed:{
    ...mapGetters(["cartList"]),
    totalPrice(){
        return this.cartList.filter(item=>{
            console.log(item.checked);
            return item.checked
        }).reduce((preValue,item)=>{
            return preValue +item.lowprice * item.count
        },0).toFixed(2)
        
    },
    checkLength(){
        return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
        if(this.cartList.length===0){return false}
      return !(this.cartList.find(item=>!item.checked))
    }
},
methods:{
     checkall(){
         if (this.isSelectAll){
             this.cartList.forEach(item => {
                 item.checked=false
             });
         }else{ 
              this.cartList.forEach(item => {
                 item.checked=true
             });
         }
     }
}
}
</script>

<style scoped>
.button-bar{
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(245, 227, 220);
    align-items: center;
}
.check-all{
   display: flex;
   align-items: center;
}
</style>