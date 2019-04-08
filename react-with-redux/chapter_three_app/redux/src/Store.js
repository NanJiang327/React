import { createStore } from 'redux'
import reducer from './Reducer'

const initStates = {
  'First': 0,
  'Second': 10,
  'Third': 20
}

const store = createStore(reducer, initStates)

export default store