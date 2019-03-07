import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

  constructor () {
    super ()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const newComments = this.state.comments.concat()
    newComments.push(comment)
    this.setState({
      comments: newComments
    })
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp

