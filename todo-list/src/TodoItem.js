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

  // 需要从父组件接受参数
  // 如果这个组件第一次存在于父组件中, 不会执行
  // 如果这个组件之前已经存在于父组件中, 才会执行
  componentWillReceiveProps () {
    console.log('received props')
  }

  // 判断
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  render () {
    console.log('item render')
    const { content } = this.props
    return (
      <div onClick={this.handleDelete}>{content}</div>
    )
  }
}

export default TodoItem