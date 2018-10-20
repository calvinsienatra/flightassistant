/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import WelcomeComponent from "./Components/WelcomeComponent";
import DateTimeComponent from "./Components/DateTimeComponent";

const App = createStackNavigator({
  FirstSlide: { 
    screen: WelcomeComponent, 
    navigationOptions: {
      header: null,
    }
  },
  SecondSlide: { 
    screen: DateTimeComponent,
    navigationOptions: {
      header: null,
    }
  }
});

export default App;
