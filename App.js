/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import WelcomeComponent from "./Components/WelcomeComponent";
import DateTimeComponent from "./Components/DateTimeComponent";
import DepartureStationComponent from "./Components/DepartureStationComponent";
import CurrentLocationComponent from "./Components/CurrentLocationComponent";
import AirlineNameComponent from "./Components/AirlineNameComponent";
import FlightNumberComponent from "./Components/FlightNumberComponent";
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const App = StackNavigator(
{
  FirstSlide: { 
    screen: FlightNumberComponent, 
    navigationOptions: {
      header: null,
    }
  },
  SecondSlide: { 
    screen: DateTimeComponent,
    navigationOptions: {
      header: null,
    }
  },
  ThirdSlide: { 
    screen: DepartureStationComponent, 
    navigationOptions: {
      header: null,
    }
  }
},
{
  transitionConfig: getSlideFromRightTransition,
}
);

export default App;
