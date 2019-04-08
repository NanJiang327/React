import * as TodoAction from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: TodoAction.ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text
})

export const removeTodo = (id) => ({
  type: TodoAction.REMOVE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: TodoAction.TOGGLE_TODO,
  id
})