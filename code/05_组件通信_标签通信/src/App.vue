<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <!--<TodoHeader :addTodo="addTodo"/>-->
      <!--给TodoHeader标签对象绑定addTodo事件监听
      <TodoHeader @addTodo="addTodo"/>
      使用绑定监听事件
      this.$emit(@监听名="方法名",参数)
      -->

      <!--
        <TodoHeader ref="header"/>
          mounted(){//执行异步代码
            this.$refs.header.$on('addTodo',this.addTodo)
  },

      -->
      <TodoHeader ref="header"/>
      <TodoList :todoList="todoList" :deleteTodo="deleteTodo" />
<!--
      <TodoFooter :todoList="todoList" :clearTask="clearTask" :selectAll="selectAll"/>
-->
      <todo-footer>
        <input type="checkbox" v-model="isSelectAll" slot="checkBoxAll"/>
        <span slot="count"><span>已完成{{numbers}}</span> / 全部{{todoList.length}}</span>
        <button slot="clearButton" class="btn btn-danger" @click = 'clearTask()'>清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
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
  mounted(){//执行异步代码
    this.$refs.header.$on('addTodo',this.addTodo);


    //订阅消息
    PubSub.subscribe("deleteTodo",(msg,index)=>{
      this.deleteTodo(index);
    })
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
