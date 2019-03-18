import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addtion, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem }from './style'
import { CSSTransition } from 'react-transition-group'
import  * as actionCreators  from './store/actionCreators'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as loginActionCreators  from '../../pages/login/store/actionCreators'

class Header extends Component {

  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleRefresh } = this.props
    const newList = list.toJS()
    const pageList = []

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Most viewed
            <SearchInfoSwitch onClick={() => {handleRefresh(page, totalPage, this.spinIcon)}} >
              <i ref={(icon) => { this.spinIcon = icon} } className='iconfont spin'>&#xe600;</i>
              Refresh
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, hanldInputClick, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
            <Link to='/'>
              <Logo />
            </Link>
            <Nav>
              <Link to='/'><NavItem className='left'>Main</NavItem></Link>
              {
                login ? 
                <NavItem className='right logout' onClick={logout}>Logout</NavItem>: 
                <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
              }
              <NavItem className='right'>
                <i className='iconfont'>&#xe636;</i>
              </NavItem>
              <SearchWrapper>
                <CSSTransition
                  in={focused}
                  timeout={200}
                  classNames="slide"
                >
                  <NavSearch 
                  onClick={() => {hanldInputClick(list)}} 
                  onBlur={handleInputBlur}
                  className={focused ? 'focused' : ''}
                  >
                  </NavSearch>
                </CSSTransition>
                <i className={focused? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
                {this.getListArea()}
              </SearchWrapper>
            </Nav>
            <Addtion>
              <Link to='/post'>
                <Button className='new'>
                  <i className='iconfont'>&#xe617;</i>
                  Post
                </Button>
              </Link>
              <Button className='reg'>Register</Button>
            </Addtion>
        </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hanldInputClick(list) {
      if(list.size === 0) dispatch(actionCreators.getInfoList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleRefresh (page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
      originAngle = originAngle ? parseInt(originAngle, 10) : 0
      spinIcon.style.transform = 'rotate(' + (originAngle + 360 ) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.refresh(page + 1))
      } else {
        dispatch(actionCreators.refresh(1))
      }
    },
    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)