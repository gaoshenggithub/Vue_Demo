<template>
  <li @mouseenter="changeStatus(true)" @mouseleave="changeStatus(false)" :style="{background:isColor}">
    <label>
      <input type="checkbox" v-model="todo.status"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isStatus" @click="deleteTodos()">删除</button>
  </li>
</template>

<script>
  export default {
    props:{
      todo:{
        type:Object,
        required:true
      },
      index:{
        type:Number,
        required:true
      },
      deleteTodo:{
        type:Function,
        required:true
      }
    },
    data(){
      return{
        isStatus:false,
        isColor:'#ffffff'
      }
    },
    methods:{
      changeStatus(value){
        if (value){
          this.isStatus=value;
          this.isColor='#D1D1D1'
        }else{
          this.isStatus=value;
          this.isColor='#ffffff'
        }
      },
      deleteTodos(){
        const {index,deleteTodo} = this;
        deleteTodo(index);

      }
    }
  }

</script>

<style scoped>
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
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
