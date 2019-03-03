<template>
  <div class="todo-footer">
    <label>
<!--
      <input type="checkbox" v-model="isSelectAll"/>
-->
      <slot name="checkBoxAll"></slot>
    </label>
<!--
    <span><span>已完成{{numbers}}</span> / 全部{{todoList.length}}</span>
-->
    <slot name="count"></slot>
<!--
    <button class="btn btn-danger" @click = 'clearTask()'>清除已完成任务</button>
-->
    <slot name="clearButton"></slot>
  </div>
</template>

<script>
  export default {
    props:{
      todoList:{
        type:Array,
        required:true
      },
      clearTask:{
        type:Function,
        required:true
      },
      selectAll:{
        type:Function,
        required:true
      }
    },
    methods:{

    },

  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
