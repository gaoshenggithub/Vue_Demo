<template>
  <li @mouseleave="changeStatus(false)" @mouseenter="changeStatus(true)"
      :style='{background:isColor}'>
    <label>
      <input type="checkbox" v-model="todo.status"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="todoListDelete()">删除</button>
  </li>
</template>

<script>
export default {
  props:{
    todo:{
      type:Object,
      required:true,
    },
    index:{
      type:Number,
      required:true
    },
    todoDelete:{
      type:Function,
      required:true
    }
  },
  data(){
    return{
      isColor: "#ffffff",
      isShow:   false,
    }
  },
  methods:{
    changeStatus(value){
      if (value){
        this.isColor =  '#D9D9D9';
        this.isShow = true;
      } else{
        this.isColor =  '#ffffff';
        this.isShow = false;
      }
    },
    todoListDelete(){
      const {index,todoDelete} = this;
      todoDelete(index);
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
