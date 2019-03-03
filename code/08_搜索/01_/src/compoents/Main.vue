<template>
  <div>
    <h2 v-if="firstView">请输入用户名</h2>
    <h2 v-if="loading">Loading....</h2>
    <h2 v-if="isNull">站....</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
    <div class="card" v-for="(user,index) in users" :key="index" :user="user">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.username}}</p>
    </div>
  </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
export default {
  data(){
    return{
      firstView:true,
      loading:false,
      errorMsg:'',
      users:null,
      isNull:false
    }
  },
  mounted(){
    PubSub.subscribe("searchName",(message,searchName)=>{
      const url = `https://api.github.com/search/users?q=${searchName}`
      console.log(url);
      //1.改变状态
      this.firstView=false;
      this.loading=true;
      this.users=null;
      this.errorMsg=''
      this.isNull=false;
      axios.get(url).then(response=>{
        const result = response.data;
        console.log(result.items);
        if (result.items.length==0){
          this.isNull=true;
          this.loading=false;
          return ;
        }
        const users = result.items.map(item=>({
          html_url:item.html_url,
          avatar_url:item.avatar_url,
          username:item.login
        }));
        this.loading=false;
        this.users=users
      }).catch((error)=>{
        this.errorMsg = '............';
        this.loading=false
      })
    })
  }
}
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
