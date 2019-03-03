<template>
  <div>
  <ul>
    <li v-for="(mess,index) in messageList" :key="mess.id"><a>
      <router-link :to="`/home/messages/detail/${mess.id}`">{{mess.title}}</router-link>
    </a> ------<button @click="pushMain(mess.id)">push
    </button>------------<button @click="replaceMain(mess.id)">replace</button></li>
  </ul>
    <router-view :messageList="messageList"></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messageList:[]
      }
    },
    methods:{
      pushMain(value){
        this.$router.push(`/home/messages/detail/${value}`);
      },
      replaceMain(value){
        this.$router.replace(`/home/messages/detail/${value}`);
      }
    },
    mounted(){
      window.setTimeout(()=>{
        const  message = [
          {'title':'title001',id:1},{'title':'title002',id:2},
          {'title':'title003',id:3},{'title':'title004',id:4}
        ]
        this.messageList = message;
      },1000);
    }
  }
</script>

<style scoped>

</style>
