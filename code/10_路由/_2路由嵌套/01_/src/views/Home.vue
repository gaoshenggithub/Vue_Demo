<template>
    <div>
      <h2>Home</h2>
      <div>
        <ul class="nav nav-tabs">
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/messages">Message</router-link>
        </ul>
        <div>
          <ul>
            <router-view></router-view>
          </ul>
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
