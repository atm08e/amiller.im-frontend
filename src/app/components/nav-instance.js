import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

import {Software} from '../software'

export class NavInstance extends Component {
  onSoftwareClick() {
    const el = document.getElementById('root');
    ReactDOM.render(<Software/>, el);
  }
  onSnowboardClick() {
    alert("softwareclick")
  }
  onFishingClick() {
    alert("Fishingclick")
  }
  onMusicClick() {
    alert("Musicclick")
  }
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
        <Navbar>
          <Nav>
            <NavItem onClick={this.onSoftwareClick}>Software</NavItem>
            <NavItem href='/snowboaring'>Snowboarding</NavItem>
            <NavItem onClick={this.onFishingClick}>Fishing</NavItem>
            <NavItem onClick={this.onMusicClick}>Music</NavItem>
          </Nav>
        </Navbar>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}
