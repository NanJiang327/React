import React, { Component } from 'react'
import Counter from './Counter'


import * as Actions from '../Actions.js';
import store from '../Store'

class CounterContainer extends Component {
  
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = this.getOwnState()
  }

  getOwnState () {
    return {
      value: store.getState()[this.props.caption]
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption);
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption);
  }


  render () {
    return <Counter caption={this.props.caption}  onIncrement={this.onIncrement} onDecrement={this.onDecrement} value={this.state.value} />
  }
}
export default CounterContainer