import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading'
import axios from 'axios'

import config from '../utils/config'


class Review extends Component {
  constructor() {
    super()
    this.state = {
      ready: false,
      reviews: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return
    this.setState({ ready: false })
    this.fetchReview(nextProps)
  }

  componentDidMount () {
    this.fetchReview(this.props)
  }

  fetchReview (props) {
    const api = config.tmdb.basicUrl + props.movieId + '/reviews?api_key=' + config.tmdb.apiKey
    axios.get(api)
     .then((res) => {
       console.log(res.data.results)
       this.setState({
         reviews: res.data.results,
         ready: true
       })
     }).catch(err => {
       console.log(err)
     })
  }

  render () {
    if (!this.state.ready) return <Loading />
    return (
      <div>
        {
          this.state.reviews.map((review, idx) => {
            return (
              <div>Hello World</div>
            )
          })
        }
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}

export default connect(mapStateToProps)(Review)