import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
export class SocialMediaInstance extends Component {
  render() {
    return (
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <center>
            <h3>Social</h3>
          </center>
          Facebook
          Gmail
          Instagram
          Snapchat
          twitter
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
