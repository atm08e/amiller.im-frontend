import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
export class MailingListInstance extends Component {
  render() {
    return (
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <center>
            <h3>
              Mailing List
            </h3>
          </center>
          <Row>
            Click here to subscribe to the mailing list for this website and recieve updates.
          </Row>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
