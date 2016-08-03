import React, {Component} from 'react';
import axios from 'axios';

import {Blog} from './blog';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Blogs extends Component {
  constructor() {
    super();
    this.state = {blogs: []};
  }

  componentDidMount() {
    axios
      // TODO REST call
      .get('app/blogs/blogs.json')
      .then(response => {
        this.setState({blogs: response.data});
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          These are blog posts
        </h2>
        <div style={styles.blogs}>
          {this.state.blogs.map((blog, i) => (
            <Blog key={i} blog={blog}/>
          ))}
        </div>
      </div>
    );
  }
}
