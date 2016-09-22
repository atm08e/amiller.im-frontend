import React, {Component} from 'react';
import {Link} from 'react-router'
import {Row, Col, PageHeader} from 'react-bootstrap';

export class TitleInstance extends Component {
  render() {
    return (
      <Row>
        <Col md={4}/>
        <Col md={4}>
          <PageHeader>
            <center>
              <large><Link to="/">Drew Miller</Link></large>
            </center>
          </PageHeader>
        </Col>
        <Col md={4}/>
      </Row>
    );
  }
}
