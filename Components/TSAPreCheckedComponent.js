import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';



class TSAPreCheckedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonColorA: "#7986CB",
      buttonColorB: "#7986CB" // default button color goes here
    };
  }
  
  onButtonAPress = () => {
      this.setState({buttonColorA: "#C5CAE9", buttonColorB: "#7986CB"});
  }

  onButtonBPress = () => {
      this.setState({buttonColorB: "#C5CAE9", buttonColorA: "#7986CB"});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.maincontainer}>
        <View style={{flex: 3,flexDirection: "row", alignItems:'center'}}>
          <View style={{flex: 3, flexDirection:"column", alignItems: 'stretch', justifyContent: "center",padding: 20, marginBottom:70}}> 
            <Header4 output="Do you have TSA Pre-check?" style={{flex:1, justifyContent: 'center', marginTop: 150}}/>
            <View style={{flex:1, flexDirection: "column", justifyContent: 'space-evenly', marginBottom:100}}>
            <Button
              title="Yes"
              color={this.state.buttonColorA}
              style={{height: 50, width: '100%'}}
              onPress={this.onButtonAPress}
            />

            <Button
              title="No"
              color={this.state.buttonColorB}
              style={{height: 50,width: '100%'}}
              onPress={this.onButtonBPress}
            />
            </View>
            
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
              navigate('FirstSlide')
              }
          />
        </View>
        
      </View>
    );
  }
}

export default TSAPreCheckedComponent;