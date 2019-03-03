<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todoList" :todo="todo" :key="index" :index="index" :deleteL="deleteL"/>
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
        required:true,
      },
      deleteL:{
        type:Function,
        required:true
      }
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
