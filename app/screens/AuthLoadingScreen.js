import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { initialization } from '../actions/authorization';

class AuthLoadingScrenn extends React.Component {
  componentDidMount(){
    this.props.fetchData()
  }
  shouldComponentUpdate(nextProps, n){
    if(!nextProps.authState.isLoading){
      if(nextProps.authState.success) this.props.navigation.navigate('Home')
      else this.props.navigation.navigate('SignIn')
    }
    return true
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size="large"
          color="blue"
        />
        <Text style={styles.textStyle}>Загрузка...</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authState: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: () => dispatch(initialization())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScrenn);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  textStyle: {
    color:'#252D76',
    fontFamily:'Montserrat',
    fontSize:15.2778,
  },
});