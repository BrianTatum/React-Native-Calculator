import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NumButton from './components/NumButton'
import FuncButton from './components/FuncButton'

export default class LayOut extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      display: 0,
      func: null,
      newNum: false,
      calString: ''
    };
    this._displayUpdate = this._displayUpdate.bind(this);
    this._handleCalFunc = this._handleCalFunc.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#c2d6d6'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native Calculator</Text>
        </View>
        <View style={styles.displayArea}>
          <Text style={styles.displayText}>{this.state.display}</Text>
          <Text style={styles.calStringText}>{this.state.calString}</Text>
        </View>
        <View style={styles.buttonRow}>
          <FuncButton funcText={'C'} func={this._handleCalFunc} />
          <FuncButton funcText={'%'} func={this._handleCalFunc} />
          <FuncButton funcText={'√'} func={this._handleCalFunc} />
          <FuncButton funcText={'÷'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={7} update={this._displayUpdate} />
          <NumButton numText={8} update={this._displayUpdate} />
          <NumButton numText={9} update={this._displayUpdate} />
          <FuncButton funcText={'*'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={4} update={this._displayUpdate} />
          <NumButton numText={5} update={this._displayUpdate} />
          <NumButton numText={6} update={this._displayUpdate} />
          <FuncButton funcText={'-'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={1} update={this._displayUpdate} />
          <NumButton numText={2} update={this._displayUpdate} />
          <NumButton numText={3} update={this._displayUpdate} />
          <FuncButton funcText={'+'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <FuncButton funcText={'+/-'} func={this._handleCalFunc} />
          <NumButton numText={0} update={this._displayUpdate} />
          <FuncButton funcText={'.'} func={this._handleCalFunc} />
          <FuncButton funcText={'='} func={this._handleCalFunc} />
        </View>
      </View>
    );
  }

  _displayUpdate(value) {
    if (!this.state.newNum) {
      let displayValue = this.state.display * 10 + value;
      this.setState({
        display: displayValue,
        newNum: false});
    } else {
      this.setState({
        display: value,
        newNum: false
      })
    }
  }

  _handleCalFunc(func) {
    switch (func) {
      case 'C':
        this.setState({
          total: null,
          display: 0,
          newNum: false,
          func: null,
          calString: ''
        });
        break;
      case '+':
      case '-':
      case '*':
      case '÷':
        this._addPress(func);
        break;
      case '=':
        let grandTot = this._doCalFunc(this.state.total, this.state.display, this.state.func);
        this.setState({
          total: null,
          display: grandTot,
          newNum: true,
          func: null,
          calString: ''
        });
    }
  }

  _addPress(newFunc) {
    let newCalString = this.state.calString.concat(` ${this.state.display} ${newFunc}`);
    if (this.state.total !== null) {
      let calVal = this._doCalFunc(this.state.total, this.state.display, this.state.func);
      this.setState({
        newNum: true,
        func: newFunc,
        total: calVal,
        display: calVal,
        calString: newCalString
      })
    } else {
      this.setState({
        newNum: true,
        func: newFunc,
        total: this.state.display,
        calString: newCalString
      })
    }
  }

  _doCalFunc(v1, v2, func) {
    switch (func) {
      case '+':
        return v1 + v2;
        break;
      case '-':
        return v1 - v2;
        break;
      case '*':
        return v1 * v2;
        break;
      case '÷':
        return v1 / v2;
        break;
    }
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#990000',
    margin: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: 'black',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
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
  calStringText: {
    textAlign: 'right'
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

AppRegistry.registerComponent('LayOut', () => LayOut);