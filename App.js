
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import images from './screen/images'
import Home from './screen/Home'
const RootStack = createStackNavigator(
  {
    'Home': {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    'images': {
      screen: images,
       navigationOptions: {
        headerShown: false,
      },
    },
  },
  { initialRoutName: 'Home' }

);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;