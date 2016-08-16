import React, {Component} from 'react';
import {Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap'
import {Snowboarding} from './snowboarding'

export class NavInstance extends Component{
  onSoftwareClick() {
    alert("softwareclick")
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
            <NavItem onClick={this.onSnowboardClick}>Snowboarding</NavItem>
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
