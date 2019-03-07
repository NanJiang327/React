import React, { Component } from 'react';

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInput (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  displayList() {
    return (
      this.state.list.map((item, index) => {
        return <li key={index}>{item}</li>
      })
    )
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInput.bind(this)} type="text"/>
        <button onClick={this.handleBtnClick.bind(this)}>add</button>
        <ul>
          {this.displayList()}
        </ul>
      </div>
    )
  }
}

export default TodoList