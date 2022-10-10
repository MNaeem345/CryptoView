import React from 'react';
import {Line} from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  return (
    <>
        <Row className='chart-header'>
            <Col className='price-container'>
                
                <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>

            </Col>
        </Row>
        
    </>
  )
}

export default LineChart