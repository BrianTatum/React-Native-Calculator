import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Math from 'mathjs';

import NumButton from './components/NumButton'
import FuncButton from './components/FuncButton'

export default class LayOut extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      display: '0',
      func: null,
      newNum: true,
      calString: ''
    };
    this._displayUpdate = this._displayUpdate.bind(this);
    this._handleCalFunc = this._handleCalFunc.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#c2d6d6'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React Native Calculator {this.state.total}</Text>
        </View>
        <View style={styles.displayArea}>
          <Text style={styles.displayText}>{this.state.display}</Text>
          <Text style={styles.calStringText}>{this.state.calString}</Text>
        </View>
        <View style={styles.buttonRow}>
          <FuncButton funcText={'C'} func={this._handleCalFunc} />
          <FuncButton funcText={'X²'} func={this._handleCalFunc} />
          <FuncButton funcText={'√'} func={this._handleCalFunc} />
          <FuncButton funcText={'÷'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={'7'} update={this._displayUpdate} />
          <NumButton numText={'8'} update={this._displayUpdate} />
          <NumButton numText={'9'} update={this._displayUpdate} />
          <FuncButton funcText={'*'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={'4'} update={this._displayUpdate} />
          <NumButton numText={'5'} update={this._displayUpdate} />
          <NumButton numText={'6'} update={this._displayUpdate} />
          <FuncButton funcText={'-'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <NumButton numText={'1'} update={this._displayUpdate} />
          <NumButton numText={'2'} update={this._displayUpdate} />
          <NumButton numText={'3'} update={this._displayUpdate} />
          <FuncButton funcText={'+'} func={this._handleCalFunc} />
        </View>
        <View style={styles.buttonRow}>
          <FuncButton funcText={'+/-'} func={this._handleCalFunc} />
          <NumButton numText={'0'} update={this._displayUpdate} />
          <NumButton numText={'.'} update={this._displayUpdate} />
          <FuncButton funcText={'='} func={this._handleCalFunc} />
        </View>
      </View>
    );
  }

  _displayUpdate(value) {
    if (!((this.state.display.match(/\./g) || []).length == 1 && value =='.') || (this.state.newNum)) {
      if (!this.state.newNum) {
        this.setState({
          display: this.state.display.concat(value),
          newNum: false});
      } else {
        if (value=='.') {value='0.';}
        this.setState({
          display: value,
          newNum: false
        })
      }
    }
  }

  _handleCalFunc(func) {
    switch (func) {
      case 'C':
        this.setState({
          total: null,
          display: '0',
          newNum: true,
          func: null,
          calString: ''
        });
        break;
      case '+':
      case '-':
      case '*':
      case '÷':
        this._funcPress(func);
        break;
      case '=':
        let grandTot = this._doCalFunc(this.state.total, parseFloat(this.state.display), this.state.func);
        grandTot = grandTot.toString();
        this.setState({
          total: null,
          display: grandTot,
          newNum: true,
          func: null,
          calString: ''
        });
        break;
      case 'X²':
        this.setState({
          display: (Math.square(this.state.display)).toString(),
          newNum: true
        })
        break;
      case '√':
        this.setState({
          display: (Math.sqrt(this.state.display)).toString(),
          newNum: true
        });
        break;
      case '+/-':
        this.setState({
          display: (Math.eval(`${this.state.display} * -1`).toString()),
          newNum: true
        })
    }
  }

  _funcPress(newFunc) {
    let newCalString = this.state.calString.concat(` ${this.state.display} ${newFunc}`);
    if (this.state.total !== null) {
      let calVal = this._doCalFunc(this.state.total, parseFloat(this.state.display), this.state.func);
      this.setState({
        newNum: true,
        func: newFunc,
        total: calVal,
        display: calVal.toString(),
        calString: newCalString
      })
    } else {
      this.setState({
        newNum: true,
        func: newFunc,
        total: parseFloat(this.state.display),
        calString: newCalString
      })
    }
  }

  _doCalFunc(v1, v2, func) {
    let answer = 0;
    switch (func) {
      case '+':
        answer = Math.eval(v1 + v2);
        break;
      case '-':
        answer = Math.eval(v1 - v2);
        break;
      case '*':
        answer = Math.eval(v1 * v2);
        break;
      case '÷':
        answer = Math.eval(v1 / v2);
        break;
      default:
        answer = v2; 
    }
    return answer;
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