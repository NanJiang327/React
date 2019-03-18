import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends PureComponent {
	render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>
          Post an article
        </div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }

}


const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})



export default connect(mapState, null)(Post);