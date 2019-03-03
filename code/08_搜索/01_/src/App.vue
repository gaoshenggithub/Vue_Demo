<template>
  <div class="container">
    <Search/>
    <Main/>
  </div>
</template>

<script>
  import Main from './compoents/Main.vue'
  import Search from './compoents/Search.vue'

  export default {
    components:{
      Main,Search
    },

  }
</script>

<style scoped>

</style>
