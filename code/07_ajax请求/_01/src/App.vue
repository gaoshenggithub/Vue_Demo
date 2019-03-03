<template>
  <div>
    <div>加载中</div>
    <div>搜索结果为<a :href="urlName">{{searchName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        urlName:'',
        searchName:'',
      }
    },
    mounted(){
      //发送ajax请求获取数据使用====>vue-resource
     const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
      /*  this.$http.get(url).then((response)=>{
         const result = response.data;
         console.log(result.items[0])
        var name =  result.items[0].name;
        var urlHtml =  result.items[0].html_url;
        this.urlName=urlHtml;
        this.searchName=name;
       },(response)=>{
       });*/
    axios.get(url).then((response)=>{
      const result = response.data;
      console.log()
      const res = result.items[0];
      this.urlName = res.html_url;
      this.searchName = res.name
    }).catch((error)=>{
      alert("错误信息");
    })

    }
  }

</script>

<style scoped>

</style>
