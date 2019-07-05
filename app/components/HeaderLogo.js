import React from 'react';
import {
  Dimensions,
  Image,
} from 'react-native';

export default class HeaderLogo extends React.Component {
  render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <Image
        source={require('../images/logo.png')}
        style={[this.props.style, { width: 200, height: 80, marginHorizontal:screenWidth/2-100}]}
      />
    );
  }
}