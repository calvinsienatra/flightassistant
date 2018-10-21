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
  }

},
{
  transitionConfig: getSlideFromRightTransition,
}
);

export default App;
