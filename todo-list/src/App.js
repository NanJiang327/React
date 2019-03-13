import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleToggle () {
    this.setState({
      show: !this.state.show
    })
  }

  handleAdd () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
            {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                // in={this.state.show}
                timeout={1000}
                classNames='fade'
                unmountOnExit
                onEntered={(el) => { el.style.color = 'blue'}}
                appear={true}
                key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
                )
              })
            }
        </TransitionGroup>
        <button onClick={this.handleAdd}>Add</button>
      </Fragment>
    )
  }
}

export default App