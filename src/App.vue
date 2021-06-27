<template>
  <div id="app">
    <MainTabBar/>
    <keep-alive exclude="detail">
     <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar"
export default {
  name:"app",
  components:{
   MainTabBar
  }
}
</script>
<style>
@import "assets/css/base.css";
@import "assets/css/normalize.css";
</style>
