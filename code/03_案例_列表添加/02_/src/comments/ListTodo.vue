<template>
  <ul class="todo-main">
    <ItemTodo :todoDelete='todoDelete' v-for="(todo,index) in todoList" :todo='todo' :key="index" :index='index'/>
  </ul>
</template>

<script>
  import ItemTodo from './ItemTodo.vue'
export default {
  components:{
    ItemTodo
  },
  props:{
    todoList:{
      type:Array,
      required:true,
    },
    todoDelete:{
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

  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
