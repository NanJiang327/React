import axios from 'axios'
import * as constants from './constants'

const getLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})

export const login = (username, password) => {
  return (dispatch) => {
    axios.get()
    .then((res) => {
      dispatch(getLogin())
    })
    .catch(
      alert('Fail to login')
    )
  }
}