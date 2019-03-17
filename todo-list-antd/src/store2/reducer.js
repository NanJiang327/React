import * as constants from './constants'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case constants.CHANGE_INPUT_VALUE:
      newState.inputValue = action.value
      return newState // 返回给store
    case constants.ADD_ITEM: 
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case constants.DELETE_ITEM:
      newState.list.splice(action.index, 1)
      return newState
    case constants.INIT_LIST:
      return newState
    default:
      return state;
  }
}