import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='Username' innerRef={(input) => {this.username = input}} />
            <Input placeholder='Password' innerRef={(input) => {this.password = input}} type='password'/>
            <Button onClick={() => {this.props.login(this.username,this.password)}}>Log in</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }

}


const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login (username, password) {
    dispatch(actionCreators.login(username, password))
  }
})

export default connect(mapState, mapDispatch)(Login);