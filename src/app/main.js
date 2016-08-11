import React, {Component} from 'react';
import {Navbar, NavItem, Row, Col, Grid, PageHeader, Button, ListGroup, ListGroupItem, Well, Image, Nav} from 'react-bootstrap'

export class SocialMediaInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <h3>Social</h3>
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

export class MailingListInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <h3>
            Mailing List
          </h3>
          <small> Join the <a>email list</a> to receive updates on the website automatically </small>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}

export class TestimonalsInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <h3>
            Testimonals
          </h3>
          <Row>
            <Well>"Drew is definitely the coolest person I know" - Drew Miller</Well>
          </Row>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}

export class LatestNewsInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
          <h3>
            Latest News
          </h3>
          <ListGroup>
            <ListGroupItem href="#link1">8/1/16 - Working to get the website completed!</ListGroupItem>
            <ListGroupItem href="#link1">7/23/16 - Revisting the javascript ecosystem!</ListGroupItem>
            <ListGroupItem href="#link1">7/07/16 - Experimenting with python3.5</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}

export class SeeAlsoInstance extends Component{
  render(){
    return(
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

export class NavTwoInstance extends Component{
  render(){
    return(

      <Row>
        <Col md={3}/>
        <Col md={6}>
         <Button bsStyle="primary" bsSize="large">Software</Button>
         <Button bsStyle="primary" bsSize="large">Snowboarding</Button>
         <Button bsStyle="primary" bsSize="large">Fishing</Button>
         <Button bsStyle="primary" bsSize="large">Music</Button>
       </Col>
       <Col md={3}/>
      </Row>

    );
  }
}

export class AboutInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
        <h3>
          <center>Drew Miller is a software engineer, hacker, snowboarder, and fisherman. </center>
          <br/>
          <center><small>His dream is to build software that helps make
            people's lives amazing and easier. Currently he is helping to build a
            new PaaS system at Ultimate Software. He is well-known for gathering
            detailed software requirments, architeching services, and delivering performant solutions on time.</small></center>
        </h3>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}

export class SplashImageInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={4}/>
        <Col md={4}>
          <Image src="/me.jpg" rounded responsive />
        </Col>
        <Col md={4}/>
      </Row>
    );
  }
}

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

export class NavInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={3}/>
        <Col md={6}>
        <Navbar>
          <Nav>
            <NavItem>Software</NavItem>
            <NavItem>Snowboarding</NavItem>
            <NavItem>Fishing</NavItem>
            <NavItem>Music</NavItem>
            <NavItem>Movies & TV</NavItem>
          </Nav>
        </Navbar>
        </Col>
        <Col md={3}/>
      </Row>
    );
  }
}

export class GridInstance extends Component {
  render(){
    return(
      <Grid>
        <TitleInstance/>
        <NavInstance/>
        <SplashImageInstance/>
        <AboutInstance/>
        <NavTwoInstance/>
        <SeeAlsoInstance/>
        <LatestNewsInstance/>
        <TestimonalsInstance/>
        <MailingListInstance/>
        <SocialMediaInstance/>
      </Grid>
    );
  }
}

export class Main extends Component {
  render() {
    return (
        <GridInstance/>
    );
  }
}
