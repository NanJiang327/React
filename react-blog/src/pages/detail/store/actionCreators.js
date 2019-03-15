import axios from 'axios'
import * as constants from './constants'

const getDetailData = (detail) => ({
  type: constants.CHANGE_DETAIL,
  detail
})

export const getDetail = (id) => {
  return (dispatch) => {
		axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/detail?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(getDetailData(result));
		});
	}
}