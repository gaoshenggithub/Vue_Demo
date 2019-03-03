<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <HanderTodo :addTodoList="addTodoList"/>
      <ListTodo :todoList="todoList" :todoDelete="todoDelete"/>
      <FooterTodo :todoList="todoList" :clearTask="clearTask" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import HanderTodo from './comments/HanderTodo.vue'
  import ListTodo from './comments/ListTodo.vue'
  import FooterTodo from './comments/FooterTodo.vue'
export default {
  watch:{
    todoList:{
      deep:true,
      handler:function (value) {
        window.localStorage.setItem("key_",JSON.stringify(value))
      }
    }
  },
  components:{
    HanderTodo,ListTodo,FooterTodo
  },
  data(){
    return{
      todoList: JSON.parse(window.localStorage.getItem("key_")||'[]'),
    }
  },
  methods:{
    addTodoList(value){
      const {todoList} = this;
      todoList.unshift(value);
    },
    todoDelete(value){
      const {todoList} = this;
     todoList.splice(value,1);

    },
    clearTask(){
      const {todoList} = this;
      this.todoList=todoList.filter(todo=>!todo.status);
    },
    selectAll(check){
      const {todoList} = this;
      todoList.forEach(value=>value.status=check);
      console.log(check);
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
