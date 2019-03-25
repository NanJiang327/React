import React, { Component } from 'react'
import { Row, Card, Icon , Col, Tag, Pagination} from 'antd';
import './index.scss';
import {Link} from 'react-router-dom';
// 动画组件
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { ScrollToAnchor } from '../../utils';
const { Meta } = Card;

class Home extends Component {
  constructor () {
    super ()
    this.state = {
      nowPageList: [],
      page: 1,
      pageNum: 8
    }
  }

  componentWillMount(){
      const { posts } = this.props;
      const { page, pageNum }= this.state;
      this.setState({ nowPageList: posts.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1))})
  }

  componentWillReceiveProps(newProps){
      if(this.props.posts!==newProps.posts){
          const { page, pageNum } = this.state;
          this.setState({ nowPageList: newProps.posts.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1))})
      }
  }

  // 返回顶部
  componentDidMount() {
      ScrollToAnchor();
  }


  pageChange = (page, pageSize) => {
      // console.log('change')
      ScrollToAnchor();
      const {pageNum} = this.state;
      const {posts} = this.props;
      this.setState({ page, nowPageList: posts.slice(0 + pageNum * (page - 1), pageNum + pageNum * (page - 1))})
  }

  render () {
      const {posts} = this.props;
      const { nowPageList, page, pageNum } = this.state
      return (
        <Row style={{width: '100%', height: '100%'}}>
          <QueueAnim
            animConfig={[
              { opacity: [1, 0], translateY: [0, 150]},
              { opactiy: [1, 0], translateY: [0, -150]}
            ]}
          >
            {
              nowPageList && nowPageList.length ? (
                nowPageList.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      style={{ width: '100%', marginBottom: '20px'}}
                    >
                      <Meta
                        title={<h3><Link to={`/article/${item.number}`}>{item.title}</Link></h3>}
                        description= {
                          <Row>
                            <Row style={{display: 'flex'}}>
                              <Col style={{marginRight: '5px'}}>
                                <Icon type='calendar' style={{ fontSize: 15, marginRight: '5px'}}/>
                                {item.created_at}
                              </Col>
                              <Col>
                                <Icon type="tags-o"
                                      style={{ fontSize: 15, marginRight: '5px'}} 
                                />
                                {
                                  item.labels && item.labels.length?(
                                      item.labels.map((vitem,vindex)=>{
                                          return(
                                              <Link key={vindex} to={`/tagblog/${vitem.name}`}>
                                                <Tag style={{fontSize:16}} color={`#${vitem.color}`}>{vitem.name}</Tag>
                                              </Link>
                                          );
                                      })
                                  ):null
                                }
                              </Col>
                            </Row>
                            <Row style={{ marginTop: '20px'}}>
                              <Col>
                                <p className='index-blog-content'>{item.body}</p>
                              </Col>
                            </Row>
                          </Row>
                        }
                      />
                    </Card>
                  )
                })
              ) : <h1>No data</h1>
            } 
            <Pagination
              current={page}
              total={posts.length}
              pageSize={pageNum}
              onChange={(page, pageSize) => this.pageChange(page, pageSize)}
              hideOnSinglePage={true}
              style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}
            />
          </QueueAnim>
        </Row>
    )
  }
}

const mapStateToProps = state => {
    return {
       posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);