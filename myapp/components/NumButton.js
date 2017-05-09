import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const NumButton = ({numText}) =>
	<View style={styles.buttonArea}>
		<Text style={styles.buttonText}>{numText}</Text>
	</View>

const styles = StyleSheet.create({
	buttonArea: {
		flex: 1,
		backgroundColor: 'green',
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