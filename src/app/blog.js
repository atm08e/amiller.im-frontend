import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {TitleInstance} from './components/title-instance';
import {NavInstance} from './components/nav-instance';
export class GridInstance extends Component {
  render() {
    return (
      <Grid>
        <TitleInstance/>
        <NavInstance/>
        <h2> Blog </h2>
      </Grid>
    );
  }
}
export class Blog extends Component {
  render() {
    return (
      <GridInstance/>
    );
  }
}
