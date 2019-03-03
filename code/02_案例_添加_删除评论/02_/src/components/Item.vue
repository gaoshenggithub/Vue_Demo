<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem()">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.context}}</p>
  </li>
</template>

<style>

</style>

<script>
export default {
  props:{
    comment:{
      type:Object,
      required:true,
    },
    index:{
      type:Number,
      required:true
    },
    deleteComment:{
      type:Function,
      required:true
    }
  },
  methods:{
    deleteItem(){
      const {index,deleteComment,comment} = this;
      if(window.confirm(`确定删除${comment.name}?`)){
        deleteComment(index);
      }
    }
  }

}
</script>
