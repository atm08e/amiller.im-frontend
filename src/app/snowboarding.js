import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

import {TitleInstance} from './components/title-instance';
import {NavInstance} from './components/nav-instance';


const PHOTO_SET = [
  {
    src: 'http://snowbrains.com/wp-content/uploads/2014/01/url-2.jpeg',
    width: 1920,
    height: 1080,
    aspectRatio: 1,
    lightboxImage:{
      src: 'http://snowbrains.com/wp-content/uploads/2014/01/url-2.jpeg',
        srcset: [
          'http://snowbrains.com/wp-content/uploads/2014/01/url-2.jpeg 1920w'
        ]
      }
  }
];

export class SnowGallery extends Component {
  render() {
      return (
          <Gallery photos={PHOTO_SET} />
      );
    }
}
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
