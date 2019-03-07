import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Example extends Component {
  render () {
    const className = 'header'
    const goodWord = <strong> is good</strong>
    const isGoodWord = true
    const badWord = <span> is not good</span>
    return (
      <div>
        <h1 className={className}>React 小书</h1>
        <label htmlFor="male">Male</label>
        <h2>
          React is {isGoodWord ? goodWord : badWord }
        </h2>
      </div>
    )
  }
}

class LikeButton extends Component {
  static defaultProps = {
    wordings: {
      likedText: '取消',
      unlikedText: '点赞'
    }
  }

  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
    // if (this.props.onClick) {
    //   this.props.onClick()
    // }
  }

  render () {
    const wordings = this.props.wordings || {
      likedText: '取消',
      unlikedText: '点赞'
    }
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText } 👍
      </button>
    )
  }
}

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} />
        <LikeButton onClick={() => console.log('Click on like button!')} />
        {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)