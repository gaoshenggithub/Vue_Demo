<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComments="addComments"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import List from './components/List.vue'
  import Add from './components/Add.vue'
export default {
  components:{
    List,Add
  },
  data(){
    return{
      comments:[
        {name:"AOA",context:"挺好的"},{name:"BOB",context:"也不错"},{name:"COC",context:"OJBK"},
        {name:"DOD",context:"OK啦"}
      ]
    }
  },
  methods:{
    addComments(value){
      this.comments.unshift(value);
    },
    deleteComment(index){
      this.comments.splice(index,1);
    }
  }
}
</script>
