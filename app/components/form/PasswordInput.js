import React from 'react';
import {
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import { connect } from 'react-redux';
import { setPassword } from '../../actions/authorization';

import {styles} from './styles'
import {Icon} from 'react-native-elements';

class PasswordInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass:true,
        }
    }
    showHide(){
        this.state.showPass?this.setState({showPass:false}):this.setState({showPass:true})
    }
  render() {
    return (
        <View style={{flexDirection: 'row', }}>
            <TextInput
                editable={this.props.editable}
                secureTextEntry={this.state.showPass}
                style={[styles.inputStyle, {flex:1}]}
                onChangeText={(text) => {
                    this.setState({pass:text})
                    this.props.setPassword(text)
                }}
                value={this.state.pass}
            />
            <TouchableHighlight onPress={this.showHide.bind(this)} activeOpacity={0.3} underlayColor={'#252D7633'}>
                <Icon iconStyle={styles.iconStyle} name='eye' type='antdesign' color='#3066E0' />
            </TouchableHighlight>
        </View>
    );
  }
}
const mapDispatchToProps = {
    setPassword
}
export default connect(null, mapDispatchToProps)(PasswordInput);