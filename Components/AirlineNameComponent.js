import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';
import Autocomplete from 'react-native-autocomplete-input';


class AirlineNameComponent extends Component {
	
	constructor(props) {
    super(props);
    this.state = { 
    	text: null,
    	date: this.props.navigation.state.params.chosenDate,
    	time: this.props.navigation.state.params.chosenTime,
    	airport: this.props.navigation.state.params.airport,
    };
      this.checkInput = this.checkInput.bind(this);
  }

  checkInput = () => {
    if(this.state.text == null){
      Alert.alert('You need to enter an airline!');
    }else{
      const { navigate } = this.props.navigation;
      navigate('FifthSlide', { 
      	airlineName: this.state.text, 
      	date: this.state.date, 
      	time: this.state.time, 
      	airport: this.state.airport });
    }
  }

	render(){
      	const { navigate } = this.props.navigation;
		return (

	      <View style={styles.maincontainer}>
	      	{/* UPPER CONTAINER --> MODIFY*/} 
        <Header3 output='Which airline will you be flying with?' style={{textAlign: "center"}}/>
        <TextInput
	        style={{height: 60, borderWidth: 0, fontSize: 20, marginTop: 10, marginBottom: 90, color: "white", textAlign: "center"}}
	        onChangeText={(text) => this.setState({text})}
	        placeholder="Enter Airline Code (e.g. AA)"
	      />
	        
	        
	        {/* BOTTOM CONTAINER --> DO NOT MODIFY*/} 
	        <View style={styles.bottomcontainer}>
	          <Body1 output="Press to continue" style={{marginBottom: 10}}/>
	          <Icon 
	              raised
	              name='arrow-right'
	              type= 'material-community'
	              color= 'blue'
	              size = {40}
	              style= {{justifyContent: 'space-evenly', alignItems: 'center'}}
	              onPress={() =>
	              	this.checkInput()
	              }
	          />
	        </View>
	      </View>
	    );
	}
}

export default AirlineNameComponent;


