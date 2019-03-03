<template>
  <div>
    <p class="test">{{hello}}</p>
  </div>
</template>

<style>
  .test{
    color:red;
  }
</style>

<script>
export default {
  data(){
    return{
      hello:"Hello World Vue"
    }
  }
}
</script>
