import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import IconFont from './IconFont'

class Search extends Component {
  state = { focused: false }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      let path = '/search?q=' + this.refs.input.value;
      this.refs.input.value = '';
      this.props.history.push(path);
    }
  };


  render () {
    let searchBarClassName = this.state.focused
      ? 'search-bar focused'
      : 'search-bar';

    return (
      <div className={searchBarClassName}>
        <div className="search-icon">
          <IconFont name={'search'} />
        </div>
        <input
          className="search-input"
          ref="input"
          type="text"
          onKeyDown={this.onKeyDown}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          placeholder="Search for a movie..."
        />
      </div>
    )
  }
}

export default withRouter(Search);
