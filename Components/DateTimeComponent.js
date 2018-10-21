import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon } from 'react-native-elements';
import moment from 'react-moment';

class DateTimeComponent extends Component {
  constructor(){
      super();
      this.state = {
        isVisible: false,
        chosenDate: ''
      };
  }

  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
    });
    console.log('A date and time has been picked: ', datetime);
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    });
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.maincontainer}>
        <View style={{flex: 1,flexDirection: "row"}}>
          <View style={{flex: 3, justifyContent: "center", padding: 20}}> 
            <Header5 output="When are you flying?" style={{marginBottom: 100}}/>
            <TouchableOpacity style={styles.button} onPress={this.showPicker}>
              <Button1 output='Departure date'/>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isVisible}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
              mode={'datetime'}
              is24Hour={false}
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
              navigate('ThirdSlide')
              }
          />
        </View>
        
      </View>
    );
  }
}

export default DateTimeComponent;
