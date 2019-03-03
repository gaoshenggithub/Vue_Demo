<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addArgs="addArgs"/>
      <TodoList :todoList="todoList" :deleteL="deleteL"/>
      <TodoFooter :todoList="todoList" :deleteNotCheck="deleteNotCheck" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import TodoFooter from './components/TodoFooter.vue'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  export default {
    components:{
      TodoFooter,
      TodoHeader,
      TodoList
    },
    data(){
      return{
        todoList: JSON.parse(window.localStorage.getItem('todos_key')||'[]'),
      }
    },
    watch:{
      todoList:{
        deep:true,
        handler:function(value){
          window.localStorage.setItem('todos_key',JSON.stringify(value));
        }
      }
    },
    methods:{
      addArgs(value){
        const {todoList} = this;
        if(todoList.length>10){
          alert("显示的太多了");
          return;
        }
        todoList.unshift(value);
      },
      deleteL(value){
        const {todoList} = this;
        todoList.splice(value,1);
      },
      deleteNotCheck(){
        const {todoList} = this;
        this.todoList = todoList.filter(function(value){
          console.log(!value.status);
          return !value.status;
        });
      },
      selectAll(check){
        const {todoList} = this;
        todoList.forEach(value=>value.status=check);
      }
    },

  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
