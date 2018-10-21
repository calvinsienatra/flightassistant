

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';
import LocationView from "react-native-location-view";
import MapView from 'react-native-maps';


class CurrentLocationComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      curLatitude: null,
      curLongitude: null,
      date: this.props.navigation.state.params.chosenDate,
      time: this.props.navigation.state.params.chosenTime,
      airport: this.props.navigation.state.params.airport,
      airlineName: this.props.navigation.state.params.airportName,
    };
      this.checkInput = this.checkInput.bind(this);
  }

  checkInput = (data) => {
    this.state = {
      curLatitude: data.latitude,
      curLongitude: data.longitude,
    };


    if(this.state.curLatitude == null || this.state.curLongitude == null){
      Alert.alert('You need to select a location!');
    }else{
      const { navigate } = this.props.navigation;
      navigate('SixthSlide', { 
        flightNumber: this.state.text, 
        date: this.state.date, 
        time: this.state.time, 
        airport: this.state.airport, 
        airlineName: this.state.airlineName,
        longitude: this.state.curLongitude,
        latitude: this.state.curLatitude
      });

    }
  }

  render(){
        const { navigate } = this.props.navigation;
    return (

        <View style={{flex: 1}}>
          {/* UPPER CONTAINER --> MODIFY*/} 
          <View style={{flex: 1}}>
            <LocationView
              apiKey={"AIzaSyD7GU2D3RQU0Md3mmL748BIonHQFPNt9O4"}
              initialLocation={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              markerColor="#841584"
              actionButtonStyle={{backgroundColor: "#841584"}}
              actionText="Select your current location"
              onLocationSelect={(data) =>
                this.checkInput(data)
              }
            />
          </View>
        </View>
      );
  }
}

export default CurrentLocationComponent;



