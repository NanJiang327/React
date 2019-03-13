import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST, GET_INIT_LIST } from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})


/*
  Redux-thunk 中间件的使用
*/
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/todolist').then((res) => {
//       // console.log(res.data.data)
//       const action = initListAction(res.data.data)

//       dispatch(action)
      
//     }).catch((err) => { alert('error') })
//   }
// }


// 使用中间件对 dispatch方法 升级, 升级后可以接收函数或者对象作为参数(原来只能接收对象, 并传给store), 如果参数是函数的话, 则先执行这个函数, 再传给store