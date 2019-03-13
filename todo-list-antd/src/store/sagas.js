import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'

function* gertInitList() {
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/todolist')
    const action  = initListAction(res.data.data)
    yield put(action)
  } catch(e) {
    console.log(e)
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, gertInitList)
}

export default mySaga;