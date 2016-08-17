import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {Snowboarding} from './app/snowboarding';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/snowboarding" component={Snowboarding}/>
  </Router>,
  document.getElementById('root')
);
