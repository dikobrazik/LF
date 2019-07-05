import React from 'react';
import {
    Animated,
    Dimensions,
    Keyboard,
    TextInput,
    Text,
    View,
    UIManager
} from 'react-native';

import { connect } from 'react-redux';
import { setEmail } from '../../actions/authorization';

import {styles} from './styles'
import PasswordInput from './PasswordInput'

const { State: TextInputState } = TextInput;

class BasicInputForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass:true,
            email:'',
            pass:'',
            shift: new Animated.Value(0),
        }
    }
    componentWillMount(){
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);

    }
    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }
    
  render() {
    let emailError, passwordError = '';
    if(this.props.error != undefined){
        switch(this.props.error){
            case 'auth/invalid-email':
                emailError = 'Ошибка, неверный email. Попробуйте снова.'
                break;
            case 'auth/user-not-found':
                emailError = 'Пользователь не найден. Попробуйте снова.'
                break; 
            case 'auth/wrong-password':
                passwordError = 'Неверный пароль.'
                break;
            case 'auth/weak-password':
                passwordError = 'Пароль должен состоять минимум из 6 символов.'
                break;
            case 'auth/empty-pass':
                passwordError = 'Пароль не может быть пустым.'
                break;
            case 'auth/empty-email':
                emailError = 'Email не может быть пустым.'
                break;
            default:
                emailError = ''
                passwordError = ''
        }
    }
    const { shift } = this.state;
    return (
        <Animated.View style={[this.props.style, { transform: [{translateY: shift}] }]}>
            <View>
                <Text style={styles.inputLabels}>Email</Text>
            <TextInput
                editable={!this.props.disabled}
                style={styles.inputStyle}
                onChangeText={(text) => {
                    this.props.setEmail(text)
                    this.setState({email:text})
                }}
            />

            <Text style={styles.errorTextStyle}>{emailError}</Text>

            <Text style={[styles.inputLabels, {marginTop:10}]}>Пароль</Text>
            <PasswordInput
                editable={!this.props.disabled}
                update={this.updateData} />
            <Text style={styles.errorTextStyle}>{passwordError}</Text>
            </View>
        </Animated.View>
    );
  }

  handleKeyboardDidShow = (event) => {
    const { height: windowHeight } = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      if (gap >= 0) {
        return;
      }
      Animated.timing(
        this.state.shift,
        {
          toValue: gap,
          duration: 1000,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  handleKeyboardDidHide = () => {
    Animated.timing(
      this.state.shift,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }
}
const mapDispatchToProps = {
    setEmail
}
export default connect(null, mapDispatchToProps)(BasicInputForm);
