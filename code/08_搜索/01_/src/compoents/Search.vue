<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" v-model="name" placeholder="enter the name you search"/>
      <button @click="searchName">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'
export default {
  data(){
    return{
      name:''
    }
  },
  methods:{
    //发布消息
    searchName(){
      const {name} = this;
      if (!name){
        alert("不能为空..");
        return;
      }
      PubSub.publish("searchName",name);
    }
  }
}
</script>

<style scoped>

</style>
