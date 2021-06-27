<template>
  <div class="checkbutton" :class="{check:isChecked}">
     <img src="~assets/img/cart/tick.svg" >
  </div>
</template>

<script>
export default {
name: "checkbutton",
props:{
    isChecked:{
        type:Boolean,
        default:false
    }
}
}
</script>

<style>
.checkbutton{

    border-radius: 50%;
    border:2px solid #aaa
}
.check{
    border-color: red;
   background-color: red;
}
img{
    width: 15px;
}
</style>