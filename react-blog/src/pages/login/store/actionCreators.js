import axios from 'axios'
import * as constants from './constants'

const getLogin = () => ({
  type: constants.CHANGE_LOGIN,
})

export const logout = () => ({
  type: constants.LOGOUT,
})

export const login = (username, password) => {
  return (dispatch) => {
    axios.get('/api/homeList.json')
    .then((res) => {
      const data = res.data.data;
      if (data.username === username.value && data.password === password.value) {
        dispatch(getLogin())
      } else {
        alert('Check your username and password!')
      }
    })
    .catch(
      (e) => {
        alert('Fail to login' + e)
      }
    )
  }
}