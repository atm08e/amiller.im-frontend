import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
export class SplashImageInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={4}/>
        <Col md={4}>
          <Image src="/me.jpg" rounded responsive />
        </Col>
        <Col md={4}/>
      </Row>
    );
  }
}
