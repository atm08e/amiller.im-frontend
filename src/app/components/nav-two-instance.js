import React, {Component} from 'react';

import {Row, Col, Button} from 'react-bootstrap';
export class NavTwoInstance extends Component{
  render(){
    return(

      <Row>
        <Col md={3}/>
        <Col md={6}>
         <Button bsStyle="primary" bsSize="large">Software</Button>
         <Button bsStyle="primary" bsSize="large">Snowboarding</Button>
         <Button bsStyle="primary" bsSize="large">Fishing</Button>
         <Button bsStyle="primary" bsSize="large">Music</Button>
       </Col>
       <Col md={3}/>
      </Row>

    );
  }
}
