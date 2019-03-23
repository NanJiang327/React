import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import IconFont from './IconFont'

import config from '../utils/config'

const  Movie = ({data, appBackground}) => {
  if (!data.title || !data.backdrop_path || !data.poster_path) return null

  let title = data.title === data.original_title ? (
      <div className="subject-title">
       <Link to={'/detail/' + data.id}>
        <div className="title-1">{data.title}</div>
       </Link>
      </div>
  ) : (
      <div className="subject-title">
        <Link to={'/detail/' + data.id}>
          <div className="title-1">{data.title}</div>
          <div className="title-2">{data.original_title}</div> 
        </Link>
      </div>
  )
  let backgroundImage = `url(${config.tmdb.backdropUrl + data.backdrop_path})`

  let genres = config.tmdb.genres.filter(item => {
    return data.genre_ids.indexOf(item.id) >= 0
  }).map(
    item => {
      return item.name
    }
  ).join(', ')

  let heroClassName = 'subject-hero small';

  let bgClassName = appBackground ? 'app-bg' : 'subject-hero-bg';

  return (
    <section className="subject-header" >
     
      <section className={heroClassName}>
        <div className="subject-hero-container">
          <Link to={'/detail/' + data.id}>
            <img src={config.tmdb.bgUrl + data.poster_path} alt={data.title} />
          </Link>
          <div className="subject-hero-info">
            {title}
            <Rate allowHalf defaultValue={(data.vote_average / 2)} disabled/>
            <div className="wrap text">
              <div className="text">
                <span>Overview:</span> {data.overview}
              </div>
            </div>
            <div className='text'><span>Relase data: </span>{(data.release_date).replace(/-/g, '/')}</div>
            <div className='text'><span>Genres: </span> {genres}</div>
              <div className="douban-link">
                <a href={'https://www.themoviedb.org/movie/' + data.id} target="_blank">
                  <IconFont name={'movie'} />
                </a>
              </div>
          </div>
        </div>
        <div className={bgClassName} style={{ backgroundImage }}></div>
      </section>
    </section>
  )

}

Movie.propTypes = {
  data: PropTypes.object,
  inlineTitle: PropTypes.bool,
  appBg: PropTypes.bool
}

export default Movie