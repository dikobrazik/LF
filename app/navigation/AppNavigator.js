import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, StackActions, NavigationActions } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

import HeaderLogo from '../components/HeaderLogo'

const navigationOptions = {
  headerTitle: <HeaderLogo />,
  headerLeft:null,
  headerStyle: {
  backgroundColor:'#3066E0',
  paddingVertical:10,
  height:70,
  },
};
const AuthStack = createStackNavigator({ 
  SignIn: {
    screen:SignInScreen,
    navigationOptions,
  }, 
  SignUp: {
    screen: SignUpScreen,
    navigationOptions
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: HomeScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));