Vue发送ajax两种方式
一:
文档:https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

1.vue-resource    =====>    1.x

2.下载:
npm install vue-resouce

3.编码
//引入模块
import VueResource from 'vue-resource'
//使用插件
Vue.use(VueResource)

//通过vue/组件对象发送ajax请求
this.$http.get('/someUrl').then((response)=>{
  //success callback
  console.log(response.data)//返回结果数据

},(response)=>{
  //error callback
})

二:
1.axios =====>   2.x
2.下载
npm install axios


2.引入插件
import axios from 'axios'

axios.get(url).then((response)=>{//callback Success}).catch((error)=>{//callback Fail});


