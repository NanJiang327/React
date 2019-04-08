import * as TodoAction from './actionTypes'

export default (state = [], action) => {
  switch(action.type) {
    case TodoAction.ADD_TODO: 
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]
    case TodoAction.TOGGLE_TODO:
      return state.map((todoItem) => {
        return todoItem.id === action.id ? {...todoItem, completed: !todoItem.completed} : todoItem
      })
    case TodoAction.REMOVE_TODO:
      return state.filter((todoItem) => {
        return todoItem.id !== action.id
      })
    default:
      return state  
  }
}