import axios from 'axios'
import * as constants from './constants'


import config from '../utils/config'


const nowPlayingApi = config.tmdb.basicUrl + 'now_playing?api_key=' + config.tmdb.apiKey + '&language=en-AU&page=1&region=AU'
const upcomingApi = config.tmdb.basicUrl + 'upcoming?api_key=' + config.tmdb.apiKey + '&language=en-AU&page=1&region=AU'


const getNowShowingData = (res) => ({
  type: constants.FETCH_NOWSHOWING_COMPLETED,
  payload: {
    nowShowingArr: res
  }
})

const getUpcomingData = (res) => ({
  type: constants.FETCH_UPCOMING_COMPLETED,
  payload: {
    upcomingArr: res
  }
})

export function fetchData(fetchingType, arr) {
  return (dispatch) => {
    // if we last updated in one hour
    // dispatch no action
    // const updatedAt = getState().inTheaters.updatedAt;
    // if (new Date() - updatedAt < oneHour) {
    //   return Promise.resolve(undefined);
    // }
    if (arr) {
      return dispatch({
        type: constants.CHANGE_TYPE,
        fetchingType
      })
    }

    dispatch({
      type: constants.FETCH_STARTED
    });

    const type = fetchingType === 'now_showing' 
    fetchingType = type ? nowPlayingApi : upcomingApi

    axios.get(fetchingType)
      .then(res => {
        const results = res.data.results;
        if (type) {
          return dispatch(getNowShowingData(results))
        } else {
          return dispatch(getUpcomingData(results))
        }
      })
      .catch(err => {
        return dispatch({
          type: constants.FETCH_FAILED,
          error: true,
          payload: err
        });
      })
  }
}

