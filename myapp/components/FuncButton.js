import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight 
} from 'react-native';

const FuncButton = ({funcText, func, egg}) =>
	<TouchableHighlight 
		style={styles.buttonArea} 
		onPress={() => {func(funcText)}}
		onLongPress={() => {egg(funcText)}} >
		<Text style={styles.buttonText}>{funcText}</Text>
	</TouchableHighlight >

const styles = StyleSheet.create({
	buttonArea: {
		flex: 1,
		backgroundColor: '#990000',
		padding: 15,
		margin: 5,
		justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 25,
		color: 'white'
	}
})

export default FuncButton;

AppRegistry.registerComponent('FuncButton', () => FuncButton);