import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';

class DepartureStationComponent extends Component {
	render(){
		return(
			<View>
				<Header3 output='this is the DepartureStationComponent'/>
				<Text>{this.props.navigation.state.params.chosenDate}</Text>
				<Text>{this.props.navigation.state.params.chosenTime}</Text>
			</View>
		);
	}
}

export default DepartureStationComponent;
