<template>
  <div class="cart">
    <nav-bar class="buycart">
      <template v-slot:center>
         <div>购物车({{cartlength}})</div>
      </template>
    </nav-bar>
    <scroll class="query5" :probe-type="3" ref="scroll">
    <cart-list></cart-list>
    </scroll>
    <cart-button-bar/>
  </div>
</template>
 
 <script>
 import NavBar from "components/common/navbar/NavBar.vue"
  import scroll from "components/common/scrool/scroll"
  import cartList from "./childcompos/cartList.vue"
  import cartButtonBar from "./childcompos/cartBottonBar"
 export default {
   name:"cart",
   components:{
     NavBar,
     cartList,
     scroll,
     cartButtonBar
   },
   computed:{
     cartlength(){
       return this.$store.state.cartList.length
     }
   },
   activated(){
      this.$refs.scroll.refresh()
      console.log("---");
   }

 }
 </script>
 <style scoped>
  .cart{
     height: 100vh; 
     }
   .buycart{
     background-color: pink;
     color: #eee;
     
   }
   .query5{
     height: calc(100% - 135px);
     overflow: hidden;
   }
 </style>
