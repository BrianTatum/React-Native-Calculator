/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LayOut from './myapp/layOut'

export default class FirstProj extends Component {
  render() {
    return (
        <LayOut />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mine: {
    fontSize: 40,
    textAlign: 'center',
    color: '#006600',
    margin: 25
  }
});

AppRegistry.registerComponent('FirstProj', () => FirstProj);
