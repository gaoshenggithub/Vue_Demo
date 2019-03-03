<template>
  <li @mouseenter="enterShow(true)" @mouseleave="enterShow(false)" :style='{background:bgColor}'>
    <label>
      <input type="checkbox" v-model="todo.status"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="status" @click="deleteItem">删除</button>
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
      deleteL:{
        type:Function,
        required:true
      }
    },
    methods:{
      enterShow(value){
        if (value){
          this.status=true;
          this.bgColor='#aaa'
        }else{
          this.status=false;
          this.bgColor='white'
        }
      },
      deleteItem(){
        const {index,deleteL} = this;
        deleteL(index);
      }
    },
    data(){
      return{
        status:false,
        bgColor: 'white',
      }
    }
  }
</script>

<style>

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
