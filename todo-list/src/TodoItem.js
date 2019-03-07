import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // 子组件如果想和父组件沟通, 要调用父组件的方法

  handleDelete() {
    this.props.delete(this.props.index)
  }

  render () {
    const { content } = this.props
    return (
      <div onClick={this.handleDelete}>{content}</div>
    )
  }
}

export default TodoItem