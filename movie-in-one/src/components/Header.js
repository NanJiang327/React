import React, { Component } from 'react'
import IconFont from './IconFont'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import { changeLang } from '../store/action'

class Header extends Component {

  onClick = ({ key }) => {
    console.log(key)
    this.props.changeLang(key)
  };

  render () {
    const menu = (
      <Menu
        onClick={this.onClick}
        selectedKeys={[this.props.language]}
      >
        <Menu.Item key='en-AU'>
          English
        </Menu.Item>
        <Menu.Item key='zh-CN'>
          中文
        </Menu.Item>
      </Menu>
    );


    return (
      <div className="header">
        <div className="menu">
          <div className="menu-left">
            <Link to='/'>
              <IconFont name={'movie'} />
              Movie in One
            </Link>
          </div>
          <div className="menu-right">
            <Link to='/login' className="login-btn">
              <IconFont name={'acc'} className='movie-title'/>
              Login
            </Link>
            <Dropdown overlay={menu}>
              <Link className="ant-dropdown-link" to="#">
                <IconFont name={'lang'} className='movie-title'/>
                Language<Icon type="down" />
              </Link>
            </Dropdown>
            </div>
        </div>
        <Link to='/' className="main-page" >
          <IconFont name={'star'} className='movie-title'/>
        </Link>
        <div className="search-wrapper">
          <Search />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeLang: (language) => dispatch(changeLang(language))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);