import React, {Component} from 'react';
import {Link} from 'react-bootstrap'
import {Navbar, NavItem, DropdownButton, MenuItem, Row, Col, Grid, Jumbotron} from 'react-bootstrap'
import {ButtonGroup, Button} from 'react-bootstrap'
import ImageGallery from 'react-photo-gallery';
import {Header} from './header';
// import {Title} from './title';
//import {Techs} from './techs/techs';
// import {Blogs} from './blogs/blogs'
import {Footer} from './footer';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};



const PHOTO_SET = [
    {
      src: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      originalAlt: 'original-alt',
      thumbnailAlt: 'thumbnail-alt'

    },
    {
      src: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      src: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
];

export class Sample extends Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}

export class ButtonGroupInstance extends Component {
  render() {
    return(
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        <Button>Button</Button>
        <Button>Button</Button>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
          <MenuItem eventKey="1">Dropdown lindk</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
        <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
          <MenuItem eventKey="1">Dropdown link</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    );
  }
}

export class MainContent extends Component{
  render(){
    return(
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac tristique dolor. Etiam sit amet congue lorem. Nam ut sollicitudin tortor. Etiam non lorem nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dignissim nunc et egestas feugiat. Duis tincidunt metus ut massa rhoncus elementum. Vestibulum nec fermentum lacus. Aliquam vel condimentum tortor, non varius turpis. Integer dictum ornare elementum.
      </div>
    );
  }
}

export class JumboTronInstance extends Component {
  render(){
    return(
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );
  }
}

export class GridInstance extends Component {
  render(){
      return(
        <Grid>
          <Row className="show-grid">
            <Col xs={16}>
              <JumboTronInstance/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={3}>
              <ButtonGroupInstance/>
            </Col>
            <Col xs={9}>
              <MainContent/>

            </Col>
          </Row>
        </Grid>
      );
  }
}

export class Main extends Component {
  render() {
    return (
      <SampleGallery/>
    );
  }
}
