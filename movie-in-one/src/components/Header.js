import React from 'react'
import IconFont from './IconFont'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/' >
        <IconFont name={'dog2'} className='movie-title'/>
      </Link>
      <div className="search-wrapper">
        <Search />
      </div>
    </div>
  )
}

export default Header