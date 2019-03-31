import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading'
import axios from 'axios'
import {
  Comment, List, Avatar
} from 'antd';

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
          <List
            className="comment-list"
            header={'Reviews'}
            itemLayout="horizontal"
            dataSource={this.state.reviews}
            renderItem={item => (
              <Comment
                author={<a href={item.url}>{item.author}</a>}
                content={(
                  <p>{item.content}</p>
                )}
                avatar={(
                <Avatar
                  src="https://pic2.zhimg.com/80/v2-1e02c1531c33f9460ae82eb88a999cdd_hd.jpg"
                />
                 )}
              />
            )}
          /> 
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