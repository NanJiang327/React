import {createStore, combineReducers } from 'redux';
import { reducer as TodoReducer } from '../todos/'
import { reducer as FilterReducer } from '../filter/'

const reducer = combineReducers({
  todos: TodoReducer,
  filter: FilterReducer
})

export default createStore(reducer)