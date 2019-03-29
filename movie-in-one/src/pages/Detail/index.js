import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import Movie from '../../components/Movie'
import Loading from '../../components/Loading'
import Cast from '../../components/Cast'
import Review from '../../components/Review'
import config from '../../utils/config'
import { Divider, BackTop } from 'antd'

class Detail extends Component {

  constructor() {
    super ()
    this.state = {
      ready: false,
      movie: {},
      casts: []
    }
  }

  componentDidMount() {
    this.fetchDetail(this.props.match.params.id, this.props.language)
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return
    this.fetchDetail(nextProps.match.params.id, nextProps.language)
  }

  fetchDetail = (id, language) => {
    let castApi = config.tmdb.basicUrl + id +'/credits?api_key=' + config.tmdb.apiKey
    let movieApi = config.tmdb.basicUrl + id + '?api_key=' + config.tmdb.apiKey +'&language=' + language
    axios.all([
      axios.get(castApi),
      axios.get(movieApi)
    ])
      .then(axios.spread((castRes, movieRes) => {
        this.setState({
          movie: movieRes.data,
          overview: movieRes.data.overview,
          casts: castRes.data.cast,
          ready: true
        })
        console.log(movieRes.data)
      }))
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    if (!this.state.ready) return <Loading />

    let casts = this.state.casts.map((cast, castId) => {
      return castId < 4 ? <Cast {...cast} key={castId} /> : null
    })
    
    return (
      <div>
       <Movie data={this.state.movie} language={this.props.language} appBackground />
        <section className="subject-casts">
          <Divider className="casts-title">
            {
              this.props.language === 'zh-CN' ? '主演' : 'Top cast'
            }
          </Divider>
          <div className="subject-casts-flex">
            {casts}
          </div>
        </section>
        <section className="subject-content">
          <div className="title">
            {
              this.props.language === 'zh-CN' ? '剧情简介' :'Overview'
            }  
          </div>
          <p>
            {
              this.state.overview ? this.state.overview : this.props.language === 'zh-CN' ? '暂无简介' : 'No overview'
            }
          </p>
        </section>
        <section className="subject-reviews">
          <Review movieId={this.state.movie.id} />
        </section>
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    language: state.language
  };
}

export default connect(
  mapStateToProps
)(Detail);