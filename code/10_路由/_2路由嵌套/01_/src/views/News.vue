<template>
  <ul>
    <li v-for="(arr,index) in arrList">{{arr}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return{
        arrList:['news01','news02','news03','news04']
      }
    }
  }
</script>

<style scoped>

</style>
