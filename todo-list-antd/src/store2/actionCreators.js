import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_LIST, GET_INIT_LIST } from "./constants";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST,
  data
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})