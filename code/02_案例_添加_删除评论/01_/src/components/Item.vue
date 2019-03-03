<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem()">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.context}}</p>
  </li>
</template>

<script>
  export default {
    methods:{
      deleteItem(){
        const {index,comment,deleteComment} = this;
          if (window.confirm(`确认删除${comment.name}?`)){
              deleteComment(index);
          }
      }
    },
    props:{
      comment:Object,
      index:{
        type:Number,
        required:true
      },
      deleteComment:{
        type:Function,
        required:true
      }
    }
  }
</script>

<style >
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
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
