import axios from 'axios'
import * as constants from './constants'
import config from '../utils/config'

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

export const changeLang = (language) => ({
  type: constants.CHANGE_LANG,
  language
})

export function fetchData(fetchingType, language) {
  return (dispatch, getState) => {
    if (fetchingType !== getState().type) {
       dispatch({
        type: constants.CHANGE_TYPE,
        fetchingType
      })
    }
    
    dispatch({
      type: constants.FETCH_STARTED
    });

    const api = config.tmdb.basicUrl + fetchingType +'?api_key=' + config.tmdb.apiKey + '&language='+ language +'&page=1&region=AU'
    const type = fetchingType === 'now_playing' 

    axios.get(api)
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

