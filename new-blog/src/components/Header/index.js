import React, { PureComponent } from 'react';
import { Row, Col, Icon, Affix} from 'antd';
import './index.scss';
import { Link } from 'react-router-dom';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import TweenOne from 'rc-tween-one';

export default class Header extends PureComponent {
  render () {
    return (
      <Affix offsetTop={0}>
        <Row className='header'>
          <Link to={'/'}>
            <Col span={6} className='header-title' style={{ marginTop: '30px', cursor: 'pointer' }}>
                <div className="combined" style={{ color: '#fff'}}>
                <div className="combined-shape">
                    <div className="shape-left">
                        <TweenOne
                            animation={[
                                { x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                            ]}
                        />
                    </div>
                    <div className="shape-right">
                        <TweenOne
                            animation={[
                                { x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 },
                                { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 },
                            ]}
                        />
                    </div>
                </div>
                <Texty
                    className="title"
                    type="mask-top"
                    delay={400}
                    enter={this.getEnter}
                    interval={this.geInterval}
                    component={TweenOne}
                    componentProps={{
                        animation: [
                            { x: 130, type: 'set' },
                            { x: 100, delay: 500, duration: 450 },
                            {
                                ease: 'easeOutQuart',
                                duration: 300,
                                x: 0,
                            },
                            {
                                letterSpacing: 0,
                                delay: -300,
                                scale: 0.9,
                                ease: 'easeInOutQuint',
                                duration: 1000,
                            },
                            { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' },
                        ],
                    }}
                >
                Aaron
                </Texty>
                <TweenOne
                    className="combined-bar"
                    animation={{ delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' }}
                />
                <Texty
                    className="content"
                    type="bottom"
                    split={this.getSplit}
                    delay={2200}
                    interval={30}
                >
                    Hello World!
                </Texty>
                </div>
            </Col>
          </Link>
          <Link to='/'>
              <Col offset={14} span={2} className='header-menu'>
                  <span className='header-menu-index'><Icon type="home" style={{marginRight:5}}/></span>
              </Col>
          </Link>
          <Link to='/archive'>
              <Col span={2} className='header-menu'>
                  <span className='header-menu-archive'><Icon type="switcher" style={{ marginRight: 5 }} /></span>
              </Col>
          </Link>          
        </Row>
      </Affix>
    )
  }
}