import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Blog} from './app/blog';
import {Snowboarding} from './app/snowboarding';
import {Fishing} from './app/fishing';
import {Music} from './app/music';
import {About} from './app/about';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/snowboarding" component={Snowboarding}/>
    <Route path="/fishing" component={Fishing}/>
    <Route path="/music" component={Music}/>
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('root')
);
