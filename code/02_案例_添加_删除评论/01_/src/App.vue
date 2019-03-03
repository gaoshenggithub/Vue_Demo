<template>
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
      <Add :addComments="addComments"/><List :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
export  default {
  components:{
    Add,List
  },
  data(){
    return{
      comments:[
        {name:"AOA",context:"说点什么"},
        {name:"BOB",context:"不想说了"},
        {name:"COC",context:"溜了"},
        {name:"DOD",context:"BOX"}
      ]
    }
  },
  methods:{
    addComments(comment){
      this.comments.unshift(comment);
    },
    deleteComment(index){
      this.comments.splice(index,1);
    }
  }
}
</script>

<style>


  li {
    transition: .5s;
    overflow: hidden;
  }


  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }

</style>
