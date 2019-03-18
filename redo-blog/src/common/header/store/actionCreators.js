import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const refresh = (page) => ({
  type: constants.REFRESH,
  page
})

export const getInfoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/popular').then((res) => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch((err) => {

    })
  }
}