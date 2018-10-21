import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';



class CheckedBaggagesComponent extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.maincontainer}>
        <View style={{flex: 1,flexDirection: "row"}}>
          <View style={{flex: 3, justifyContent: "center",padding: 20, marginBottom:70}}> 
            <Header4 output="Do you have any baggages to be checked?" style={{marginBottom: 20}}/>
            <Header6
              output='Yes'
              onPress={() =>
                navigate('FourthSlide')
              }
              style={styles.button}
            />
            <Header6
              style={styles.button}
              output='No'
              onPress={() =>
              navigate('FourthSlide')
              }
            />
          </View>
          
        </View>
          
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
              navigate('FourthSlide')
              }
          />
        </View>
        
      </View>
    );
  }
}

export default CheckedBaggagesComponent;