import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const NumButton = ({numText, update}) =>
	<TouchableHighlight style={styles.buttonArea} onPress={() => {update(numText)}}>
		<Text style={styles.buttonText}>{numText}</Text>
	</TouchableHighlight>

const styles = StyleSheet.create({
	buttonArea: {
		flex: 1,
		backgroundColor: '#009900',
		padding: 15,
		margin: 5,
		justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 25
	}
})

export default NumButton;

AppRegistry.registerComponent('NumButton', () => NumButton);