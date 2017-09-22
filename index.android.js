
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import { createStore } from 'redux';

import Apps from './src/components/Apps';

export default class demo1 extends Component {
  render() {
    return (
   
      <Apps />
 
    );
  }
}

AppRegistry.registerComponent('demo1', () => demo1);
