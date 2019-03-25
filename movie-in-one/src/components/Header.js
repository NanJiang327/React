import React from 'react'
import IconFont from './IconFont'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Radio } from 'antd';
import { connect } from 'react-redux';
import { changeLang } from '../store/action'

const Header = (props) => {
  return (
    <div className="header">
      <div className="language">
        <Radio.Group onChange={(e) => props.changeLang(e.target.value)} defaultValue={props.language} buttonStyle="solid">
          <Radio.Button value="en-AU">EN</Radio.Button>
          <Radio.Button value="zh-CN">CN</Radio.Button>
        </Radio.Group>
      </div>
      <Link to='/' >
        <IconFont name={'star'} className='movie-title'/>
      </Link>
      <div className="search-wrapper">
        <Search />
      </div>
    </div>
  )
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