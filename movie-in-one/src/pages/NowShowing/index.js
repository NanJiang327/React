import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieList from '../../components/MovieList';
import Loading from '../../components/Loading';
import  { fetchData } from '../../store/action'



class NowShowing extends Component {
  componentDidMount() {
    this.props.fetchNowShowing();
  }

  render (){
    const { fetchNowShowing, fetchUpcoming, type, isFetching, nowShowingArr, upcomingArr} = this.props
    if (isFetching) return <Loading />
  
    return (
      <div>
        <div className="intheater title">
          <button onClick={() => fetchNowShowing(nowShowingArr)} className={type === 'now_showing' ? 'active' :''}>Now Showing </button>
          <span> | </span>
          <button onClick={() => fetchUpcoming(upcomingArr)} className={type === 'upcoming' ? 'active' :''}> Upcoming</button>
        </div>
        {
          type === 'now_showing' ?
            <MovieList results={nowShowingArr} inlineTitle />
            : <MovieList results={upcomingArr} inlineTitle />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    type: state.type,
    nowShowingArr: state.nowShowingArr,
    upcomingArr: state.upcomingArr,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNowShowing: (nowShowingArr) => {
      dispatch(fetchData('now_showing', nowShowingArr))
    },
    fetchUpcoming: (upcomingArr) => {
      dispatch(fetchData('upcoming', upcomingArr))
    },
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowShowing);