import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import {TitleInstance} from './components/title-instance';
import {NavInstance} from './components/nav-instance';
import {SplashImageInstance} from './components/splash-image-instance';
import {AboutInstance} from './components/about-instance';
import {SeeAlsoInstance} from './components/see-also-instance';
import {LatestNewsInstance} from './components/latest-news-instance';
import {TestimonalsInstance} from './components/testimonals-instance';
import {MailingListInstance} from './components/mailing-list-instance';
import {SocialMediaInstance} from './components/social-media-instance';

export class GridInstance extends Component {
  render(){
    return(
      <Grid>
        <TitleInstance/>
        <NavInstance/>
        <SplashImageInstance/>
        <AboutInstance/>
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
