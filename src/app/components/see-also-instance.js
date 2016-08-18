import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
export class SeeAlsoInstance extends Component {
  render() {
    return (
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <small> See also: </small> <a>External Content</a> <a>Travel History</a> <a>Upcoming Events</a>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
