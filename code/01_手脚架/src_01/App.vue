<template>
  <div>
    <img  id= "app" src="./assets/logo.png" alt="logo">
    <HelloWorld/><!--3使用组件-->
  </div>
</template>
<script>
  //1.导入组件
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    //2.注册组件
    components:{
      HelloWorld
    }
  }
</script>
<style scope>
#app{
  height: 20px;
  width: 20px;
}
</style>
