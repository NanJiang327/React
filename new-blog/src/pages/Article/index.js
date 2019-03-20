import React, {Component} from 'react';
import { Row , Card, message , Tag } from 'antd';
import './index.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import { TimeUpdate, ScrollToAnchor} from '../../utils';
const { Meta } = Card;

class Article extends Component {
  constructor() {
    super ()
    this.state = {
      postInfo: [],
      loading: false,
      path: '',
    }
  }

  componentWillMount() {
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value
    })
    this.getBlogApiInfo(this.props.match.params.number);
    this.setState({ path: this.props.match.params.number })
  }

  componentWillReceiveProps(nextProps) {
      ScrollToAnchor();
      if (this.props.match.params.number !== nextProps.match.params.number) {
          this.getBlogApiInfo(nextProps.match.params.number);
          this.setState({ path: nextProps.match.params.number })
      }
  }

  // back to top
  componentDidMount() {
      ScrollToAnchor();
  }

  getBlogApiInfo(path) {
    this.setState({ postInfo: [], loading: true})
    const self = this
    axios.get(`https://api.github.com/repos/Will0319/blog/issues/` + path, {
        params: {
            creator: 'Will0319',
            client_id: '797bcc38ff786201e149',
            client_secret: 'a50e58f138828bbe362b372eb0c52def70e7b621'
        }
    }).then((res) => {
        if (res.status === 200) {
          const data = res.data
          self.setState({ postInfo: data, loading: false })
        }
    }).catch((err) => {
      message.warning('Article does not exist!')
    })
  }

  render () {
    const { postInfo, loading, talk } = this.state
    return (
      <Row style={{color: '#fff',  marginBottom: '20px'}}>
        <Card
          style={{ width: '100%'}}
          loading={loading}
        >
          <Meta
            title={
              postInfo && postInfo.body ? (
                <div>
                  <h2>{postInfo.title}</h2>
                  <div style={{ fontSize: '14px'}}>
                    <span style={{ marginRight: '16px'}}>Post on: {TimeUpdate(postInfo.created_at)}</span>
                    Tags: {
                      postInfo && postInfo.labels && postInfo.labels.length ? (
                        postInfo.labels.map((item, index) => {
                          return (
                            <Tag style={{ fontSize: '14px' }}
                                 key={index}
                                 color={`#${item.color}`}
                            >
                              {item.name}
                            </Tag>
                          )
                        })
                      ) : 'No tags'
                    }
                  </div>
                </div>
              ) : null
            }
            description= {
              postInfo && postInfo.body ? (
                <div className='article-detail' dangerouslySetInnerHTML={{__html: marked(postInfo.body)}}>
                </div>): 'No content'
            }
          />
        </Card>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Article);