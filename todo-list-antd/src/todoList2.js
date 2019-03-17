import React, { Component } from 'react';
import store from './store2/index'
import { getInputChangeAction, addItemAction, deleteItemAction } from './store2/actionCreators'
import TodoListUI from './TodoListUI2'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      handleInput={this.handleInput}
      handleSubmit={this.handleSubmit}
      list={this.state.list}
      handleItemDelete={this.handleItemDelete}
    />
  }

  // componentDidMount() {
  //   // const action = getInitList()
  //   store.dispatch(action)
  // }

  handleInput(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleSubmit () {
    const action = addItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange () {
    // 获取store的信息
    this.setState(store.getState())
  }
}

export default TodoList