vue UI组件库
4.1常用
1)Mint UI:
a  主页:npm i mint-ui -S
b  说明: VUE 移动组件


2)Element
a. 主页:http//element-cn,eleme.io/#/zh-CN
b. 说明:VUE  PC组件


4.2下载
>1   npm i mint-ui -S
>2    npm install babel-plugin-component -D
然后，将 .babelrc 修改为：
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
