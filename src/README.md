2)github:https//github.com/vuejs/vue-router
3)中文文档:http://router.vuejs.org/zh-cn
4)下载 npm install vue-router --save



路由传递参数的方式
路径/:id   强制绑定数据   route-link :to='`路径/${属性}`' ES6     ES5
路径/      route-link :to'`路径/?${属性}`'

route-view传递数据

<router-view :属性='属性'></route-view>
接收数据
props:{
  属性:{
    type:类别
    required:true
  }
}
