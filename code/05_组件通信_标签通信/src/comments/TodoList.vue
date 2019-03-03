<template>
  <ul class="todo-main">
    <TodoItem :deleteTodo="deleteTodo" v-for='(todo,index) in todoList' :index="index" :key="index" :todo="todo"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
export default {
  components:{
    TodoItem
  },
  props:{
    todoList:{
      type:Array,
      required:true
    },
/*    deleteTodo:{
      type:Function,
      required:true
    }*/
  }
}
</script>
<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
