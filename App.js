/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import AppNavigator from './app/navigation/AppNavigator';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
