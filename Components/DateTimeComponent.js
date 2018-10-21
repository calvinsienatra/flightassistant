import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
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
        chosenDate: null,
        chosenTime: null,
        chosenTimeDisplay: null,
      };

      this.checkInput = this.checkInput.bind(this);
  }

  tConvert(time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}


  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: datetime.toDateString(),
      chosenTime: datetime.toTimeString(),
      chosenTimeDisplay: this.tConvert(datetime.toLocaleTimeString()),
    });
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

  checkInput = () => {
    if(this.state.chosenDate == null || this.state.chosenTime == null){
      Alert.alert('You need to pick a date and time!');
    }else{
      const { navigate } = this.props.navigation;
      navigate('ThirdSlide', { chosenDate: this.state.chosenDate, chosenTime: this.state.chosenTime });
    }
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <Header3 output='When are you flying?' style={{textAlign: "center"}}/>

        <Header6 output={this.state.chosenDate} style={{marginBottom: 5, marginTop: 20}}/>
        <Header6 output={this.state.chosenTimeDisplay} style={{marginBottom: 20, marginTop: 5}}/>

        <TouchableOpacity>
          <Button
            onPress={this.showPicker}
            title="Select A Departure Date"
            color="#841584"
            style={[styles.datePicker, {marginBottom: 50}]}
          />
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          minimumDate={new Date()}
          is24Hour={false}
        />

          
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

export default DateTimeComponent;
