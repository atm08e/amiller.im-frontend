import React, {Component} from 'react';
import {Row, Col, Well} from 'react-bootstrap';
export class TestimonalsInstance extends Component {
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <center>
          <h3>
            Testimonals
          </h3>
          </center>
          <Row>
            <Well>"Drew is definitely the coolest person I know" - Drew Miller</Well>
          </Row>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
