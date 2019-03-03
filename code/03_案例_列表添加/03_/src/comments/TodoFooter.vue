<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAll"/>
    </label>
    <span>
          <span>已完成{{numbers}}</span> / 全部{{todoList.length}}
        </span>
    <button class="btn btn-danger" @click = 'clearTask()'>清除已完成任务</button>
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
    computed:{
      numbers(){
        const {todoList} = this;
        return todoList.reduce((proTotal,todo)=>proTotal+(todo.status?1:0),0);
      },
      isSelectAll:{
        get(){
          const {todoList,numbers} = this;
          return numbers==todoList.length && numbers>0
        },
        set(value){
          const {selectAll} =this;
          selectAll(value);
        }
      }

    }
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
