<template>
  <div>
    <mt-button type="primary" style="width: 100%;" @click.native="handleClick">primary</mt-button>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    methods:{
      handleClick(){
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      }
    }
  }
</script>

<style scoped>

</style>
