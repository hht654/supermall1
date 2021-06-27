<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="detail-comment">
      <div class="info-header">
          <div class="header-title">用户评价</div>
          <div class="header-more">更多</div>
      </div>
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <div class="info-other">
              <span class="data">{{commentInfo.created|showDate}}</span>
              <span class="info">{{commentInfo.style}}</span>
          </div>
      </div>
      <div class="info-img">
          <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
      </div>
    <div class="reply">
        {{commentInfo.explain}}
    </div>
  </div>
</template>

<script>
export default {
name:"detailCommentInfo",
props:{
    commentInfo:{
      type:Object,
      default(){
          return {}
      }
      }
},
filters:{
    showDate(value){
        //1.将时间戳改成date对象
        const date =new Date(value*1000);
        //2.
        const y=date.getFullYear();
        //console.log(y);
        const M=(date.getMonth()+1).toString().padStart(2,"0");
        //console.log(M);
         const d=date.getDate().toString().padStart(2,"0");
         const showdate=y+"-"+M+"-"+d
         return showdate
    }
}
}
</script>

<style scoped>
.detail-comment{
    padding-bottom: 10px;
    border-bottom: 3px solid rgba(131, 129, 129, 0.1);
}
.info-header{
    margin-top: 5px;
  
    width: 100%;
    height: 25px;
}
.header-title{
    float: left;
}
.header-more{
    float: right;
}

.info-user img{
    width: 30px;
    height: 30px;
    vertical-align:middle;
     margin: 0 5px;
     
}
.info-other .info{
  margin-left: 15px;
}

.info-img img{
    width: 80px;
    height: 80px;
    padding: 2px;
}
</style>