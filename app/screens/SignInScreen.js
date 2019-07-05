import React from 'react';
import {
    ActivityIndicator,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import {styles} from './styles';
import { connect } from 'react-redux';
import { authorization } from '../actions/authorization';

import BasicInputForm from '../components/form/BasicInputForm';

class SignInScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass:true,
            email:'',
            pass:'',
        }
    }
    handleSignUp(){
        this.props.navigation.navigate('SignUp')
    }
    handleSubmit = ()=>{
        this.props.signIn()
    }
    shouldComponentUpdate(nextProps, n){
        if(nextProps.authState.success) this.props.navigation.navigate('Home')
        return true
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.signInHeaderTextContainerStyle}>
                    <Text style={styles.mainHeaderTextStyle}>Вход</Text>
                    <Text style={styles.secondaryHeaderTextStyle}>Регистрация</Text>
                </View>
                <BasicInputForm 
                    error={this.props.authState.errorMessage}
                    disabled={this.props.authState.isLoading}
                    style={styles.inputFormStyle}/>
                <View style={{ flexDirection:'column', alignItems:'center', marginTop:47}}>
                    <Text style={[styles.secondaryText, {color:'#929292'}]}>Еще не зарегистрированы?</Text>
                    <TouchableHighlight
                        underlayColor={'#1115'}
                        onPress={this.handleSignUp.bind(this)}>
                        <Text style={[styles.secondaryText, {color:'#3066E0'}]}>Регистрация</Text>   
                    </TouchableHighlight>
                </View>
                <View style={{flex:1, marginTop:42, alignItems:'center'}}>
                    <TouchableHighlight
                        onPress={this.handleSubmit.bind(this)}
                        underlayColor={'#3156de'}
                        disabled={this.props.authState.isLoading}
                        style={[styles.submitButtonStyle,{backgroundColor:'#3168DE'}]}>
                        <Text style={[styles.submitButtonTextStyle, { color:'#fff' }]}>Войти</Text>
                    </TouchableHighlight>
                    {this.props.authState.isLoading?<ActivityIndicator style={{marginTop:20}}></ActivityIndicator>:<View></View>}
                </View>
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
        signIn: (email, pass) => dispatch(authorization(email, pass))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);