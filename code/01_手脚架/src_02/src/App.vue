<template>
  <div>
    <img :src="url" alt="logo" style="height: 200px;width:200px">
    <HelloWorld/>
  </div>
</template>

<style>

</style>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    data(){
      return{
        url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
      }
    },
    components:{
      HelloWorld
    }
  }
</script>
