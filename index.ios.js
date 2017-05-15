/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry } from 'react-native';

import LayOut from './myapp/layOut'

export default class FirstProj extends Component {
  render() {
    return (
      <LayOut />
    );
  }
}

AppRegistry.registerComponent('FirstProj', () => FirstProj);
