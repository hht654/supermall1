<template>
  <div class="cart-list">
     <cart-list-item :itemInfo="item"  v-for="(item,index) in cartList" :key="index">
        </cart-list-item>
     </div>
</template>

<script>
import {mapGetters} from "vuex"
import cartListItem from './cartListItem'
export default {
name:"cartList",
computed:{
    ...mapGetters(["cartList"])
},
components:
{
   cartListItem

}
}
</script>

<style>

</style>