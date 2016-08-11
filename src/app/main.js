import React, {Component} from 'react';
import {Navbar, NavItem, Row, Col, Grid, PageHeader, Button, ListGroup, ListGroupItem, Well, Image} from 'react-bootstrap'

export class SocialMediaInstance extends Component{
  render(){
    return(
      <Row>
        <PageHeader>
          Social Media
        </PageHeader>
      </Row>
    );
  }
}

export class MailingListInstance extends Component{
  render(){
    return(
      <Row>
        <PageHeader>
          Mailing List
        </PageHeader>
        <small> Join the <a>email list</a> to receive updates on the website automatically </small>
      </Row>
    );
  }
}

export class TestimonalsInstance extends Component{
  render(){
    return(
      <Row>
        <PageHeader>
          Testimonals
        </PageHeader>
        <Well>"Drew is definitely the coolest person I know" - Drew Miller</Well>
      </Row>
    );
  }
}

export class LatestNewsInstance extends Component{
  render(){
    return(
      <Row>
        <PageHeader>
          Latest News
        </PageHeader>
        <ListGroup>
          <ListGroupItem href="#link1">8/1/16 - Working to get the website completed!</ListGroupItem>
          <ListGroupItem href="#link1">7/23/16 - Revisting the javascript ecosystem!</ListGroupItem>
          <ListGroupItem href="#link1">7/07/16 - Experimenting with python3.5</ListGroupItem>
        </ListGroup>
      </Row>
    );
  }
}

export class SeeAlsoInstance extends Component{
  render(){
    return(
      <Row>
        <small> See also: </small> <a>External Content</a> <a>Travel History</a> <a>Upcoming Events</a>
      </Row>
    );
  }
}

export class NavTwoInstance extends Component{
  render(){
    return(
      <Row>
         <Button bsStyle="primary" bsSize="large">Software</Button>
         <Button bsStyle="primary" bsSize="large">Snowboarding</Button>
         <Button bsStyle="primary" bsSize="large">Fishing</Button>
         <Button bsStyle="primary" bsSize="large">Music</Button>
      </Row>
    );
  }
}

export class AboutInstance extends Component{
  render(){
    return(
      <Row>
        <h3>
          Drew Miller is a software engineer, hacker, snowboarder, and fisherman. <br/>
          <small>His dream is to build amazing software that helps make people's live better and easier. Currently, he is working for the PaaS team at Ultimate Software. He is well-known for gathering detailed software requirments and delivering performant projects.</small>
        </h3>
      </Row>
    );
  }
}

export class SplashImageInstance extends Component{
  render(){
    return(
      <Row>
        <Col md={4}>
        <Image src="/me.jpg" rounded responsive />
        </Col>
      </Row>
    );
  }
}

export class TitleInstance extends Component{
  render(){
    return(
      <Row>
        <PageHeader>
          <large>Drew Miller</large>
        </PageHeader>
      </Row>
    );
  }
}

export class NavInstance extends Component{
  render(){
    return(
      <Row>
        <Navbar>
          <NavItem>Software</NavItem>
          <NavItem>Snowboarding</NavItem>
          <NavItem>Fishing</NavItem>
          <NavItem>Music</NavItem>
          <NavItem>Movies & TV</NavItem>
        </Navbar>
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
