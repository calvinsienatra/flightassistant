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
      buttonColor: "#7986CB" // default button color goes here
    };
  }
  
  onButtonPress = () => {
      this.setState({ buttonColor: "#E8EAF6" }); 
  }
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.maincontainer}>
        <View style={{flex: 1,flexDirection: "row"}}>
          <View style={{flex: 3, justifyContent: "center",padding: 20, marginBottom:70}}> 
            <Header4 output="Do you have TSA Pre-Check?" style={{marginBottom: 20}}/>
            <Button
              title="Yes"
              color={this.state.buttonColor}
              style={{marginBottom: 100, flex: 1, alignItems: 'space-evenly'}}
              onPress={onButtonPress}
            />
            <Button
              title="No"
              color={this.state.buttonColor}
              style={{marginTop: 100, flex: 1, alignItems: 'space-evenly'}}
              onPress={onButtonPress}
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
              navigate('SecondSlide')
              }
          />
        </View>
        
      </View>
    );
  }
}

export default TSAPreCheckedComponent;