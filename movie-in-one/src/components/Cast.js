import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../utils/config'
import config from '../utils/config';

const Cast = ({ profile_path, name, id}) => {
  let image = <img src={config.tmdb.bgUrl + profile_path} alt=""/> 

  return (
    <div className="wrap">
      <Link to={'//' + id}>
        {image}
        <div className='cast-name'>
          {name}
        </div>
      </Link>
    </div>
  )
}

Cast.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number
};

export default Cast;
