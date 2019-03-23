import React from 'react';

import IconFont from './IconFont'

const Rating = ({ rating, style }) => {
  return (
    <div className="rating" style={style}>
      <Iconfont name={'star'} />
      <span className="average">
        {rating.average}
      </span>
      <span className="max">/10</span>
    </div>
  )
}

export default Rating