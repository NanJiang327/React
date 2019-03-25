import React, { Component } from 'react';
import { Timeline , Row , Card } from 'antd';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { ScrollToAnchor } from '../../utils';
import './index.scss';
const { Meta } = Card;

class Archive extends Component {
  componentDidMount() {
      ScrollToAnchor();
  }

  render () {
    const { posts } = this.props
    return (
      <Card bordered={false} hoverable={true} className="card" >
        <Meta
          title={
            <div>
              <span className="card-title">Archive</span>
            </div>
          }
          description={
            <Timeline style={{marginTop: '20px'}}>
              {
                posts && posts.length ? (
                  posts.map((item, index) => {
                    return (<Timeline.Item key={index}>
                              <Link to={`/article/${item.number}`}>
                                <span style={{marginRight: "50px"}}>{ item.title }</span>
                                <span>{item.created_at}</span>
                              </Link>
                            </Timeline.Item>)
                  })
                ) : <h1>Fail to load data</h1>
              }
            </Timeline>
          }
        />  
      </Card>
    )
  }
}

const mapStateToProps = state =>{
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Archive);