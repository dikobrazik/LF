import React from 'react';
import {
    ActivityIndicator,
    CheckBox,
    Linking,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import {styles} from './styles';

import { connect } from 'react-redux';
import { signUp } from '../actions/authorization';

import Avatar from '../components/avatar/Avatar'
import BasicInputForm from '../components/form/BasicInputForm'
  
class SignUpScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            privacyPolicyCB:false,
            showPass:true,
        }
    }
    handleSubmit(){
        this.props.signUp()
    }
    handleCheckBox(){
        this.state.privacyPolicyCB?this.setState({privacyPolicyCB:false}):this.setState({privacyPolicyCB:true})
    }
    handleClick = () => {
        Linking.canOpenURL('https://vk.com').then(supported => {
          if (supported) {
            Linking.openURL('https://vk.com');
          } else {
            console.warn("Don't know how to open URI: " + 'vk.com');
          }
        });
    };
    shouldComponentUpdate(nextProps, n){
        if(nextProps.signUpState.success && !nextProps.signUpState.isLoading) this.props.navigation.navigate('Home')
        return true
    }
    render() {
        
        return (
            <View style={{ flex: 1,}}>
                <View style={styles.topWords}>
                    <Text style={[styles.secondaryHeaderTextStyle, {alignSelf:'center'}]}>Вход</Text>
                    <Text style={styles.mainHeaderTextStyle}>Регистрация</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'center'}}>
                    <View style={{flex:1, marginLeft:40}}>
                        <Text style={{fontFamily:'Ubuntu', fontWeight:'bold',fontSize:13, color:'#252D76', opacity:0.5}}>Фото</Text>
                    </View>
                    <View style={{flex:2.5,}}>
                        <Avatar />
                    </View>
                </View>
                <BasicInputForm 
                    error={this.props.signUpState.errorMessage}
                    disabled={this.props.signUpState.isLoading}
                    style={{flexDirection:'column', marginTop:5, marginLeft:40, marginRight:32,}}/>
                <View style={styles.privacyPolicyContainer}>
                    <CheckBox 
                        style={{alignSelf:'flex-start', checkedColor:'#3066E0'}}
                        onChange={this.handleCheckBox.bind(this)}
                        value={this.state.privacyPolicyCB}
                    />
                    <Text style={styles.privacyPolicyText}>
                        Я согласен с 
                        <Text style={{color:'#3762DC'}} onPress={this.handleClick.bind(this)}>
                            {' Политикой Конфиденциальности'}
                        </Text>
                    </Text>
                </View>
                <View style={{marginTop:22, alignItems:'center'}}>
                    <TouchableHighlight
                        onPress={this.handleSubmit.bind(this)}
                        underlayColor={'#3156de'}
                        disabled={!this.state.privacyPolicyCB || this.props.signUpState.isLoading} 
                        style={[styles.submitButtonStyle, {backgroundColor:this.state.privacyPolicyCB?'#3168DE':'rgba(48, 102, 224, 0.43)'}]}>
                        <Text style={[styles.submitButtonTextStyle, {color:'#fff'}]}>Регистрация</Text>
                    </TouchableHighlight>
                    {this.props.signUpState.isLoading?<ActivityIndicator style={{marginTop:20}}></ActivityIndicator>:<View></View>}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signUpState: state.signUp,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: () => dispatch(signUp())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);