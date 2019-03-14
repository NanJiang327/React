import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/home').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})