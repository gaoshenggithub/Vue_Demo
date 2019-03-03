/*数据存储模块*/
/*key值*/
const TODO_KEYS = "key_";



/*接口*/
export default {
  //保存数据
  saveTodos(value){
    window.localStorage.setItem(TODO_KEYS,JSON.stringify(value));
  },

  getTodos(){
    return JSON.parse(window.localStorage.getItem(TODO_KEYS)||'[]');
  }
}
