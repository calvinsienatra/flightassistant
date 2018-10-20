import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';



class WelcomeComponent extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header3 output="Hello!"/> 
        <Header3 output="Let's get started"/>
        <Icon 
            raised
            name='arrow-right'
            type= 'material-community'
            color= 'blue'
            size = {40}
            style= {{justifyContent: 'space-evenly', alignItems: 'center'}}
            onPress={() =>
            navigate('SecondSlide')
            }
        />
      </View>
    );
  }
}

export default WelcomeComponent;
