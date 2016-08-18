import React, {Component} from 'react';

import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
export class LatestNewsInstance extends Component{
  render() {
    return (
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <center>
            <h3>
              Latest News
            </h3>
          </center>
          <ListGroup>
            <ListGroupItem href="#link1">8/17/16 - Frontend base is done, react is proving to be a dream to work with!</ListGroupItem>
            <ListGroupItem href="#link1">8/1/16 - Working to get the website completed!</ListGroupItem>
            <ListGroupItem href="#link1">7/23/16 - Revisting the javascript ecosystem!</ListGroupItem>
            <ListGroupItem href="#link1">7/07/16 - Experimenting with python3.5 asyncio for the backend</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
