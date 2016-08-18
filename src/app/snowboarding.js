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
      </Grid>
    );
  }
}
export class Snowboarding extends Component {
  render() {
    return (
      <GridInstance/>
    );
  }
}
