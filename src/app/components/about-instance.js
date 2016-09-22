import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export class AboutInstance extends Component {
  render() {
    return (
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <h3>
            <center>Drew Miller is a software engineer, hacker, snowboarder, and fisherman.</center>
            <br/>
            <center>
              <small>His dream is to build software that helps
                people and makes their lives easier and more fulfilled. Currently, he is helping to
                build a
                new PaaS system at Ultimate Software. He is well-known for gathering
                detailed software requirments, architeching services, and delivering performant
                solutions on time.
              </small>
            </center>
          </h3>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
