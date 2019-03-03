<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="context"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addComment()">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>

</style>

<script>
export default {
  props:{
    addComments:{
      type:Function,
      required:true
    }
  },
  data(){
    return{
      name:'',
      context:''
    }
  },
  methods:{
    addComment(){
      //1.获取数据
      const {name,context,addComments} = this;
      //2.校验数据
      if (!name || !context){
        alert("姓名或者是文本内容不能为空");
        return;
      }
      //3.封装为全局对象
      const comment = {name,context};
      //添加到数据之中
      addComments(comment);
      this.name='';
      this.context='';
    }
  }
}
</script>
