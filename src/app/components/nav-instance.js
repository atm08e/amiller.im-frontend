import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import ReactDOM from 'react-dom';
import {Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap';

export class NavInstance extends Component {
  handleSoftwareClick() {
    const el = document.getElementById('root');
    ReactDOM.render(<Software/>, el);
  }
  handleSnowboardClick() {
    alert("softwareclick");
  }
  handleFishingClick() {
    alert("Fishingclick");
  }
  handleMusicClick() {
    alert("Musicclick");
  }
  render() {
    return (
      <Row>
        <Col md={4}/>
        <Col md={4}>
        <Navbar>
          <Nav>
          <LinkContainer to={{ pathname: '/blog' }}>
            <NavItem>Blog</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/snowboarding' }}>
            <NavItem>Snowboarding</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/fishing' }}>
            <NavItem>Fishing</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/music' }}>
            <NavItem>Music</NavItem>
          </LinkContainer>
          </Nav>
        </Navbar>
        </Col>
        <Col md={4}/>
      </Row>
    );
  }
}
