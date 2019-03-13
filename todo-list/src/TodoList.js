import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list]
    list.splice(index,  1)
    this.setState({
      list
    })
  }

  getTodoItems () {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            delete={this.handleItemClick}
            key={index} 
            content={item} 
            index={index}
          />
        )
      })
    )
  }

  // 组件被挂载之后 调用的函数
  componentDidMount () {
   // console.log('Component did mount')
   axios.get('https://www.easy-mock.com/mock/5c0899563b84ee19198848a6/nfpdf/todolist')
   .then((res) => { 
    //  this.setState({
    //   list: [...res.data.data.articles]
    //  })
    console.log(res) 
    this.setState({
      list: [...res.data.data]
    })
   }).catch(() => {
     alert('error!')
   })
  }

  // 组件被挂载之前 调用的函数
  componentWillMount () {
   // console.log('Component will mount')
  }

  // 组件更新之前调用的函数
  shouldComponentUpdate () {
    //console.log('should component upadte')
    return true
  }

  // 组件更新前, 但在shouldComponentUpadate之后
  // 如果shouldComponent返回true它才执行, 如果false则不执行
  componentWillUpdate () {
   // console.log('component will update')
  }



  render() {
    return (
      <div className="App">
        <Fragment>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className="red-btn" onClick={this.handleBtnClick}>add</button>
        </Fragment>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
