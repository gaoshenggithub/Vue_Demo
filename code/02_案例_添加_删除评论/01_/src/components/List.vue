<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length==0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item :comment="comment" v-for="(comment,index) in comments" :key="index" :index="index" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    props:{
      comments:{
        type:Array,
        required:true
      },
      deleteComment:{
        type:Function,
        required:true
      }
    },
    components:{
      Item
    }
  }
</script>

<style >
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }


  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }

</style>
