<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length==0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item :deleteComment="deleteComment" :index="index" v-for="(comment,index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<style>

</style>

<script>
  import Item from './Item.vue'
  export  default{
    props:{
      comments:{
        type:Array,
        required:true,
      },
      deleteComment:{
        type:Function,
        required:true
      }
    },
    components:{
      Item
    },

  }
</script>
