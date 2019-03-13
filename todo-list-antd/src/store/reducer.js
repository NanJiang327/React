import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST } from './actionTypes'

// 可以设置state的默认值
const defaultState = {
  inputValue: '',
  list: []
}

// state指的是上一个state中的所有数据, action是用户行为, reducer可以接收state, 但是不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝之前的数据
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState // 返回给store
  }

  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list =  action.data
    return newState
  }

  return state
}