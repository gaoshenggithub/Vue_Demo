<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todoList="todoList" :deleteTodo="deleteTodo" />
      <TodoFooter :todoList="todoList" :clearTask="clearTask" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './comments/TodoHeader.vue'
  import TodoList from './comments/TodoList.vue'
  import TodoFooter from './comments/TodoFooter.vue'
export default {
  components:{
    TodoHeader,TodoList,TodoFooter
  },
  data(){
    return{
      todoList: JSON.parse(window.localStorage.getItem("key_") || '[]')
    }
  },
  watch:{
    todoList:{
      deep:true,
      handler:(value)=>{window.localStorage.setItem("key_",JSON.stringify(value))}
    }
  },
  methods:{
    deleteTodo(value){
      const {todoList} = this;
      todoList.splice(value,1);
    },
    addTodo(value){
      console.log("=============="+value);
      const {todoList} = this;
      todoList.unshift(value);
    },
    clearTask(){
      const {todoList} = this;
      this.todoList = todoList.filter(todo=>!todo.status);
    },
    selectAll(value){
      const {todoList} = this;
      todoList.forEach(todo=>todo.status=value);
    }
  }
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
