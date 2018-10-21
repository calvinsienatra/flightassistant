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
import CheckInOptionsComponent from "./Components/CheckInOptionsComponent";
import CheckedBaggagesComponent from "./Components/CheckedBaggagesComponent";
import TSAPreCheckedComponent from "./Components/TSAPreCheckedComponent";
import CurrentLocationComponent from "./Components/CurrentLocationComponent";
import AirlineNameComponent from "./Components/AirlineNameComponent";
import FlightNumberComponent from "./Components/FlightNumberComponent";
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const App = StackNavigator(
{
  FirstSlide: { 
    screen: WelcomeComponent, 
    navigationOptions: {
      header: null,
    }
  },
  SecondSlide: { 
    screen: CheckInOptionsComponent,
    navigationOptions: {
      header: null,
    }
  },
  ThirdSlide: { 
    screen: CheckedBaggagesComponent,
    navigationOptions: {
      header: null,
    }
  },
  FourthSlide: { 
    screen: TSAPreCheckedComponent,
    navigationOptions: {
      header: null,
    }
  },
  FourthSlide: { 
    screen: AirlineNameComponent, 
    navigationOptions: {
      header: null,
    }
  },
  FifthSlide: { 
    screen: FlightNumberComponent, 
    navigationOptions: {
      header: null,
    }
  },
  SixthSlide: { 
    screen: CurrentLocationComponent, 
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
