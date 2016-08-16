import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Software} from './app/software'
import {Snowboarding} from './app/snowboarding'
import {Fishing} from './app/fishing'
import {Music} from './app/music'

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/software" component={Software}/>
    <Route path="/snowboarding" component={Snowboarding}/>
    <Route path="/fishing" component={Fishing}/>
    <Route path="/music" component={Music}/>
  </Router>,
  document.getElementById('root')
);
