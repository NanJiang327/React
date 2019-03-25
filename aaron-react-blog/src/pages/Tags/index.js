import React, {Component} from 'react';
import { Row, Card, Icon , Col, Tag , List } from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TimeUpdate, ScrollToAnchor} from '../../utils';
const { Meta } = Card;

export default class Tags extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      name: '',
      loading: false
    }
  }

  componentWillMount() {
      this.setState({name:this.props.match.params.name})
      this.getBlogApiData(this.props.match.params.name)
  }

  componentWillReceiveProps(newProps) {
      ScrollToAnchor();
      if (this.props.match.params.name !== newProps.match.params.name){
          this.setState({ name: newProps.match.params.name,list:[]})
          this.getBlogApiData(newProps.match.params.name)
      }
  }
  // 返回顶部
  componentDidMount() {
      ScrollToAnchor();
  }
  // 获取该标签的博客列表
  getBlogApiData(data) {
      this.setState({ loading:true })
      axios.get(`https://api.github.com/repos/NanJiang327/React/issues`, {
          params: {
              labels: data,
          },
      }).then((res) => {
          if (res.status === 200) {
              const data = res.data;
              const list = this.updateTime(data);
              this.setState({ list , loading:false})
          } else {

          }
      });
  }

  // 时间处理函数，留下年月日
  updateTime(data) {
      if (data.length === 0) return;
      data.map((item) => {
          item.created_at = TimeUpdate(item.created_at)
      })
      return data;
  }

  render() {
    const { list, name, loading } = this.state
    return (
      <Card
        style={{ width: '100%', marginBottom: '20px'}}
        loading={loading}
      >
        <Meta
          title={<h3>{`Tags: ${name}`}</h3>}
          description= {
            <List
              itemLayout="horizontal"
              dataSource={list}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    style={{ width: '100%'}}
                    title={<Link to={`/article/${item.number}`} style={{fontSize: '18px'}}>{item.title}</Link>}
                    description={
                      <Row>
                        <Row style={{ display: 'flex'}}>
                          <Col style={{ marginRight: '5px' }}>
                            <Icon type="calendar" style={{ marginRight: '5px' }}/>
                            {item.created_at}
                          </Col>
                          <Col>
                            <Icon type="tags-o" style={{fontSize:'20px', marginRight:"5px"}} />
                            {
                              item.labels && item.labels.length ? (
                                item.labels.map(
                                  (litem, index) => {
                                    return (
                                      <Link key={index} to={`/tagblog/${litem.name}`}>
                                        <Tag style={{fontSize:16}} color={`#${litem.color}`}>{litem.name}</Tag>
                                      </Link>
                                    )
                                  }
                                )
                              ) : null
                            }
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p className="index-blog-content">{item.body}</p>
                          </Col>
                        </Row>
                      </Row>
                    }
                  />
                </List.Item>
              )}
            />
          }
        />
      </Card>
    )
  }
}