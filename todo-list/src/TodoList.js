import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, addItemAction, deleteItemAction } from './store/actionCreators'

const TodoList = (props) => {
    const { inputValue, list, changeInputValue, handleClick, handleItemDelete } = props

    return (
      <div>
        <input value={inputValue} onChange={changeInputValue} type="text"/>
        <button onClick={handleClick}>add todo</button>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={() => { handleItemDelete(index) }}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    changeInputValue (e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleClick () {
      const action = addItemAction()
      dispatch(action)
    },
    handleItemDelete (index) {
      const action = deleteItemAction(index)
      dispatch(action)
    }
  }
}

// connect 方法返回的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)