import React, { Component, Fragment } from 'react';
import TodoItem from './index1'

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
