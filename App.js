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
