import React, { Component } from 'react';
import store from './store/index'
import { getInputChangeAction, addItemAction, deleteItemAction, getInitList } from './store/actionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {

  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // 订阅store,  当感知到store发生变化的时候, 调用 handleStoreChange这个方法
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

  componentDidMount () {

    const action = getInitList()
    store.dispatch(action)
    // axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/todolist').then((res) => {
    //   // console.log(res.data.data)
    //   const action = initListAction(res.data.data)
    //   store.dispatch(action)
      
    // }).catch((err) => { alert('error') })
  }

  handleInput (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    // 获取store的信息
    this.setState(store.getState())
  }

  handleSubmit () {
    const action = addItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

}

export default TodoList;
