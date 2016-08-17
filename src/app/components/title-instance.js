import React, {Component} from 'react';
import {Row, Col, PageHeader} from 'react-bootstrap';
export class TitleInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={4}/>
        <Col md={4}>
          <PageHeader>
            <center><large>Drew Miller</large></center>
          </PageHeader>
        </Col>
        <Col md={4}/>
      </Row>
    );
  }
}
