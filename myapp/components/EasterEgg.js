import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const EasterEgg = ({close}) =>
	<View style={styles.modalHighLight}>
		<View style={styles.modalArea} >
		    <Text style={styles.modalText} >Brian Tatum</Text>
		    <Image 	style={styles.image} 
		    		source={require('../assets/images/pic.jpg')}
		    		resizeMode='contain' />
		    <Text style={styles.emailText}>brianttaum@gmail.com</Text>
		    <TouchableHighlight 
		    	onPress={() => close()}
		    	style={styles.buttonArea} >
		    	<Text style={styles.buttonText}>Close</Text>
		    </TouchableHighlight>
		</View>
	</View>

const styles = StyleSheet.create({
	modalHighLight: {
		flex: 1,
		margin: 15,
		backgroundColor: 'white',
	},
	modalArea: { 
		flex: 1,
		backgroundColor: '#009900',
		padding: 10,
		margin: 3,
		borderColor: '#990000',
		borderWidth: 5,
	},
	modalText: {
		textAlign: 'center',
		fontSize: 50,
		fontFamily: 'Alex Brush',
		color: 'white',
	},
	emailText: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		marginBottom: 5,
	},
	image: {
		flex: 1,
		width: undefined,
		height: undefined,
		marginLeft: 5,
		marginRight: 5,
	},
	buttonArea: {
		backgroundColor: '#990000',
		margin: 5,
		padding: 5,
	},
	buttonText: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
});

export default EasterEgg;

AppRegistry.registerComponent('EasterEgg', () => EasterEgg);