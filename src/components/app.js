import React, { Component } from 'react';
import Discussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DeepDive Lifecycle</h1>
        <Discussion />
        <Rules />
        <Workflow />
      </div>
    );
  }
}