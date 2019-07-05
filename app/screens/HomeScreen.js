import React from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import HeaderLogo from '../components/HeaderLogo';
import {styles} from './styles';
import {homeStyles} from './homeStyles';
import Map from '../components/Map';

import { connect } from 'react-redux';
import { signOut } from '../actions/authorization';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  handlePress(){
    this.props.signOut()
  }
  shouldComponentUpdate(nextProps, n){
    if(!nextProps.success) this.props.navigation.navigate('SignIn')
    return true
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3066E0',}}>
        <View style={homeStyles.topContainer}>
          <HeaderLogo />
          <Text style={homeStyles.bigBoldText}>Будем знакомы;)</Text>
          <Text style={homeStyles.smallBoldText}>Вы здесь</Text>
        </View>
        <View style={{flex:2, backgroundColor:'#333'}} >
          <Map />
        </View>
        <View style={homeStyles.bottomContainer}>
          <TouchableHighlight
            activeOpacity={.9} 
            underlayColor={'#fffa'}
            onPress={this.handlePress.bind(this)} 
            style={homeStyles.submitButtonStyle}>
            <Text 
              style={[styles.submitButtonTextStyle, {color:'#3066E0'}]}>
                Понятно, я пойду
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      success: state.auth.success,
  };
};

const mapDispatchToProps = { signOut };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
