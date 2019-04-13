import React, { Component } from 'react';
import { Row, Card, Tooltip, Icon , Tag } from 'antd';
import { connect } from 'react-redux';
import {Link, withRouter } from 'react-router-dom';
import { TimesFun } from '../../utils';
import './index.scss';

const { Meta } = Card;

class RightNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tagList: [],
      sysTime: TimesFun('2019-03-20 10:00:00')
    }
  }

  componentWillMount () {
    const { posts } = this.props
    this.noRepeat(posts);
      setInterval(() => {
        let sysTime = TimesFun('2019-03-20 10:00:00')
        this.setState({
            sysTime
      })
    }, 1000)
  }

  componentWillReceiveProps(nextProps){
        if (this.props.posts !== nextProps.posts){
            this.noRepeat(nextProps.posts);
        }
    }
  // 标签去重
  noRepeat=(data)=>{
      if( data.length===0) return [];
      const ary = [];
      data.map((item)=>{
          if (item.labels && item.labels.length){
              item.labels.map((vitem)=>{
                  ary.push(vitem);
              })
          }
      })
      let hash = {};
      const taglist = ary.reduce((preVal, curVal) => {
          hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
          return preVal
      }, []);
      this.setState({
          taglist
      })
  }
  
  toGitIndex=()=>{
      window.open('https://github.com/NanJiang327');
  }

  toResume = () => {
      window.open('https://nanjiang327.github.io/MyCV/Aaron_Jiang_Resume.pdf')
  }

  render() {
        const { taglist, sysTime} = this.state;
        const { posts } = this.props;
        return (
            <Row>
                <Card bordered={false} className="card" cover={<img src={require('../../img/headbg.jpeg')} />}>
                    <div className="authorImg">
                        <img src={require('../../img/icon.svg')} alt="" />
                    </div>
                    <Meta
                        title={
                            <div>
                                <span className="card-title">Aaron</span>
                            </div>
                        }
                        description={
                            <div>
                                <p className="abstract">千万别成为大多数人</p>
                                <p className="abstract">
                                    <span>Articles - {posts.length}</span>
                                </p>
                                <p className="abstract">Online：{sysTime}
                                </p>
                            </div>
                        }
                    />
                </Card>
                <Card title="FOLLOW ME"  className="card">
                    <div className="icon-git-wrp">
                    <div className="call">
                        <Tooltip title="Resume">
                            <Icon type="solution" style={{ fontSize: 30 }} onClick={()=>this.toResume()} />
                        </Tooltip>
                        <Tooltip title="github">
                            <Icon type="github" style={{fontSize:30}} onClick={()=>this.toGitIndex()} />
                        </Tooltip>
                        <Tooltip
                        title={
                            <img
                            className="wx"
                            src={require('../../img/Wechat.png')}
                            alt="Wecaht"
                            width={100}
                            height={100}
                            />
                        }>
                            <Icon type="wechat" style={{fontSize:30}} />
                        </Tooltip>
                    </div>
                    </div>
                </Card>
                <Card title="Tags" className="card">
                        {
                            taglist && taglist.length?(
                                taglist.map((item,index)=>{
                                    return (
                                        <Link to={`/tagblog/${item.name}`} key={index}>
                                            <Tag key={index} color={`#${item.color}`} className="tag" >
                                                {item.name}
                                            </Tag>
                                       </Link>
                                    )
                                })
                            ):'No tags'
                        }
                </Card>
                <Card title={<span onClick={()=>this.toTop()}>Recent post</span>} className="card">
                    <ul>
                        {posts && posts.length ?
                            posts.map((item, index) => {
                                if (index<10){
                                    return(
                                        <li key={index} className="tag">
                                            <Link to={`/article/${item.number}`}>{item.title}</Link>
                                        </li>
                                    )
                                }
                            }):null
                        }
                    </ul>
                </Card>
            </Row>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default withRouter(connect(mapStateToProps, null)(RightNav));