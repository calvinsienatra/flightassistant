import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import styles from '../styles/MasterStyle';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle1,
         Subtitle2, Body1, Body2, Button1, Caption, Overline
       } from '../styles/FontComponents';
import colors from '../styles/ColorStyles';
import { Icon } from 'react-native-elements';



class WelcomeComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      airline_company: null,
      isLoading: true,
    };
  }

  componentDidMount(){
    /*const API = 'http://40.122.28.191/receive_json';
    const DEFAULT_QUERY = '';

    return fetch(API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        airline_company: 'dummyValue',
      }),
    })
    .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.airline_company,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });*/


    /*fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ airline_company: data.airline_company }));*/
  }
  

  

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.maincontainer}>
        <View style={{flex: 1,flexDirection: "row"}}>
          <View style={{flex: 3, justifyContent: "center", padding: 20}}>
            <Header2 output="Hello!" style={{marginBottom: 20}}/> 
            <Header5 output="We're here to help you plan your flight!" style={{marginBottom: 100}}/>
            
          </View>
          <View style={{flex: 1}}>
            <Image
              style={styles.stretch}
              source={require('../assets/imgs/plane.png')}
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

export default WelcomeComponent;
