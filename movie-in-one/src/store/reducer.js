import { saveState } from '../utils/storage'
import * as constants from './constants'


const initialState = {
  isFetching: false,
  updateAt: new Date(0) - 0,
  nowShowingArr: [],
  upcomingArr: [],
  type: 'now_playing'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case constants.FETCH_STARTED:
      return Object.assign({}, state,  {
        isFetching: true
      })
    case constants.FETCH_NOWSHOWING_COMPLETED: {
      const{ nowShowingArr, updatedAt } = action.payload;
      const newState = Object.assign({}, state, {
        isFetching: false,
        nowShowingArr,
        updatedAt,
        type: 'now_showing'
      })
      saveState({
        nowShowing: newState
      });
      return newState
    }
    case constants.FETCH_UPCOMING_COMPLETED: {
      const{ upcomingArr, updatedAt } = action.payload;
      const newState = Object.assign({}, state, {
        isFetching: false,
        upcomingArr,
        updatedAt,
        type: 'upcoming'
      })
      saveState({
        upcoming: newState
      });
      return newState
    }
    case constants.FETCH_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })
    case constants.CHANGE_TYPE: 
      return Object.assign({}, state, {
        type: action.fetchingType
      })
    default: 
      return state
  }
}