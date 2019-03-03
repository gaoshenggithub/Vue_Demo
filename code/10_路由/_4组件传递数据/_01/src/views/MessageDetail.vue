<template>
    <div>
      <ul>
        <li v-for="(mess,index) in messageList" :mess="mess">{{mess.id}}</li>
      </ul><!--路由视图传递数据-->
      ID:{{$route.params.id}}
      <p>Id:===>{{dataDetail.id}}</p>
      <p>title:===>{{dataDetail.title}}</p>
      <p>context:===>{{dataDetail.context}}</p>
    </div>
</template>

<script>
  export default {
    props:{
      messageList:{
        type:Array,
        required:true
      }
    },
    data() {
      return {
        dataDetail: {}
      }
    },
    mounted(){
      window.setTimeout(()=>{
        const messList = [
          {id:1,title:'title001',context:'context001'},
          {id:2,title:'title002',context:'context002'},
          {id:3,title:'title003',context:'context003'},
          {id:4,title:'title004',context:'context004'},
        ]
        this.messList=messList;
        const id = this.$route.params.id;
        this.dataDetail=messList.find((value)=>value.id==id);
      },1000);
    },
    watch:{
      $route:function(value){
        const id = value.params.id;
        this.dataDetail=this.messList.find((value)=>value.id==id);
      }
    }
  }
</script>

<style scoped>

</style>
