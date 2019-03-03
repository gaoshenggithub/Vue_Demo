<template>
  <div class="todo-header">
    <input type="text" v-model="name" @keyup.13="addTodos()" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>
  export default {
    props:{
      addTodo:{
        type:Function,
        required:true
      }
    },
    data(){
      return{
        name:''
      }
    },
    methods:{
      addTodos(){
        const {name,addTodo} = this;
        //收集数据
        if (!name){
          alert("不能为空");
          return;
        }
        var todo = {"name":name,"status":false}
        addTodo(todo);
        this.name = '';
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
