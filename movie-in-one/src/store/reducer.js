import axios from 'axios'
import { saveState } from '../utils/storage'
import * as constants from './constants'

const oneHour = 60 * 60 * 1000;
let REQUEST

const initialState = {
  isFetching: false,
  subject: [],
  updateAt: new Date(0) - 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case constants.FETCH_NOWSHOWING_STARTED:
      return Object.assign({}, state,  {
        isFetching: true
      })
    case constants.FETCH_NOWSHOWING_COMPLETED: {
      const{ subjects, updatedAt } = action.payload;
      const newState = Object.assign({}, state, {
        isFetching: false,
        subjects,
        updatedAt
      })
      saveState({
        nowShowing: newState
      });
      return newState
    }
    case constants.FETCH_NOWSHOWING_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })
    default: 
      return state
  }
}