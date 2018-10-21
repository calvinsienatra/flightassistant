import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';
import LocationView from "react-native-location-view";
import MapView from 'react-native-maps';


class CurrentLocationComponent extends Component {

  constructor(){
      super();

      this.state = {
        curLatitude: null,
        curLongitude: null,
      };

      this.checkInput = this.checkInput.bind(this);
  }

  checkInput = (data) => {
    this.state = {
      curLatitude: data.latitude,
      curLongitude: data.longitude,
    };

    console.log(this.state.curLatitude);
    console.log(this.state.curLongitude);
  }

	render() {

    return (

   <View style={{flex: 1}}>
        <LocationView
          apiKey={"AIzaSyD7GU2D3RQU0Md3mmL748BIonHQFPNt9O4"}
          initialLocation={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          markerColor="#841584"
          onLocationSelect={(data) =>
            this.checkInput(data)
            }
        />
      </View>


    );
  }
}

export default CurrentLocationComponent;
