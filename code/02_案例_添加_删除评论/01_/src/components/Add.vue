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

<script>
  export default {
    data(){
      return{
        name:'',
        context:''
      }
    },
    methods:{
      addComment(){
        const {name,context,addComments} = this;

        if (!name||!context){
          alert("用户名和姓名不能为空");
        }

        const comment= {
          name,context
        }
        addComments(comment);

        this.name='';
        this.context='';

      }
    },
    props:{
      addComments:{
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
