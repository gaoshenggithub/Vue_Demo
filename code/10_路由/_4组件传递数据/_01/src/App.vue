<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">Home</router-link>
          <router-link to="/about" class="list-group-item">About</router-link>
          <!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
        <a href="#/home" class="list-group-item">Home</a>-->
      </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <keep-alive>  <!--保持组件处于缓存阶段-->
            <router-view></router-view>
            </keep-alive>
            <!--<div><h2>about组件</h2>
              <p>接收外部数据:String</p>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped>

</style>
