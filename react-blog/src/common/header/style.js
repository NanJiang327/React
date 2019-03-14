import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
import './style'

export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  box-sizing: border-box;
  width: 960px;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  color: #666;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }

  &.slide-enter-active {
    width: 240px;
  }

  &.slide-exit {
    transition: all .2s ease-out;
  }

  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }

  &.new {
    color: #fff;
    background-color: #ec6149;
  }
  .iconfont {
    margin-right: 3px;
  }

`