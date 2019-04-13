import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Row, Col} from 'antd';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import RightNav from './components/RightNav';
import Music from './components/Music';
import axios from 'axios';
import { connect } from 'react-redux';
import { issuesList } from './redux/action';
import { TimeUpdate } from './utils/index';

class App extends Component {
  state = {
    issues: []
  }
  componentWillMount() {
    this.getBlogApiData();
  }

  // 获取博客内容
  getBlogApiData() {
    // axios.get(`https://api.github.com/repos/Nanjiang327/React/issues/`, {
    //     params: {
    //         creator: 'NanJiang327',
    //         client_id: '17edaa054d3fb977ba0a',
    //         client_secret: '3da40d614fb1284afa7dd93b4af5ec0f90b24991'
    //     },
    axios.get(`https://api.github.com/repos/NanJiang327/React/issues`).
    
    then((response) => {
      if (response.status === 200) {
        // 进行时间格式统一处理
        const data = response.data;
        const list = this.updateTime(data);
        const { dispatch } = this.props;
        dispatch(issuesList(list));
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
    return (
      <HashRouter>
        <div className='web' >
          <div id='to-header'></div>
            <Header />
            {/* <Music /> */}
              <Row className='bg'>
                {/* 内容区域 */}
                <Row style={{marginTop:20}}>
                  <Col xs={1} xm={1} md={1} lg={1} xl={3} xxl={4}></Col>
                  <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={16}>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                          {this.props.children}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={{span:6,offset:1}} xl={{span:6,offset:1}} xxl={{span:6,offset:1}}>
                          <RightNav />
                        </Col>
                      </Row>
                  </Col>
                </Row>
              </Row>
            <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default connect()(App);
