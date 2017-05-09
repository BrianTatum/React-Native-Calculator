import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NumButton from './components/NumButton'

export default class LayOut extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#c2d6d6'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native Calculator</Text>
        </View>
        <View style={styles.displayArea}>
          <Text style={styles.displayText}>Display Text</Text>
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={1} />
          <NumButton numText={2} />
          <NumButton numText={3} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={4} />
          <NumButton numText={5} />
          <NumButton numText={6} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={7} />
          <NumButton numText={8} />
          <NumButton numText={9} />
        </View>
        <View style={styles.buttonRow}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    margin: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: 'black',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20
  },
  displayArea: {
    height: 100,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    margin: 3,
    padding: 5
  },
  displayText: {
    fontSize: 40,
    textAlign: 'right'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('LayOut', () => LayOut);