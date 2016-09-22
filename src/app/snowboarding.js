import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import {TitleInstance} from './components/title-instance';
import {NavInstance} from './components/nav-instance';

var SnowGallery = React.createClass({
  getInitialState: function () {
    //console.log("Running Init");
    return {
      gallery_set: []
    }
  },

  componentDidMount: function () {
    console.log("Component Did Mount");
    var _this = this;
    this.serverRequest =
      axios
        .get("http://localhost:8088/snowboarding")
        .then(function (result) {
          _this.setState({
            gallery_set: result.data
          });
        });
  },

  componentWillUnmount: function () {
    // TODO
    console.log("Component will unmount");
  },

  render: function () {
    var _this = this;
    return (
      <Gallery photos={this.state.gallery_set}/>
    );
  }
});
export class GridInstance extends Component {
  render() {
    return (
      <Grid>
        <TitleInstance/>
        <NavInstance/>
        <SnowGallery/>
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
