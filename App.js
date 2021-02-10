//Example to Refresh Previous Screen When Going Back in React Navigation//
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Splash from './pages/Splash';
import MainScreen from './pages/MainScreen';
import FirstScreen from './pages/FirstScreen';
import DataSet1 from './pages/DataSet1';
import Dataset2 from './pages/Dataset2';
import DataSet3 from './pages/DataSet3';
import DataSet4 from './pages/DataSet4';
import SecondScreen from './pages/SecondScreen';
import ThirdScreen from './pages/ThirdScreen';
import FourthScreen from './pages/FourthScreen';
import AboutScreen from './pages/AboutScreen';
//import all the screens we are going to switch 
 
const App = createStackNavigator({
    Home: { screen: Splash, navigationOptions: {headerShown:false} }, 
   Category : { screen: MainScreen, navigationOptions: {headerStyle: {backgroundColor:'white'}, headerTintColor:'black'} }, 
   Level1:{screen:FirstScreen},
   Level2:{screen:SecondScreen},
   Level3:{screen:ThirdScreen},
   Level4:{screen:FourthScreen},
   About:{screen:AboutScreen}
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);