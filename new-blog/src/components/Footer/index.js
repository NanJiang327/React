import React from 'react';
import './index.scss';
import {Row} from 'antd';


export default class Footer extends React.Component{
    
    render(){        
        return(
            <Row className='footer'>
                <span>Aaron @2019</span>
            </Row>
        );
    }
}