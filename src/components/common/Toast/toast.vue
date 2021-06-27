<template>
  <div class="toast">
      <div>{{}}</div>
  </div>
</template>

<script>
export default {
name:"toast",
props:{
    message:{
        type:String,
        default:null
    }
}
}
</script>

<style>

</style>