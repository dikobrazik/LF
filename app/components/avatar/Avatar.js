import React from 'react';
import {
    Image,
    TouchableHighlight,
    View
} from 'react-native';

import {styles} from './styles'
import {uploadImage} from './imageUploader';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { setImageUri } from '../../actions/authorization';

import {Icon} from 'react-native-elements';

class Avatar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass:true,
            photoURI:'',
        }
    }
    chooseImage = () => {
        ImagePicker.launchImageLibrary({},(response) => {
            if (!response.didCancel && !response.error && !response.customButton) {
                const source = { uri: response.uri.replace(/%2F/g, '/').split('//')[2] };
                this.setState({
                    photoURI:source.uri
                })
                this.props.setImageUri(source.uri)
                // uploadImage(this.state.photoURI).then(u=>this.props.imageURL({imageURL:u}))
            }
        });
        
    }
  render() {
    const photoURI = this.state.photoURI;
    const clearAvatar = <TouchableHighlight
                            underlayColor={'#1112'}
                            onPress={()=>this.setState({photoURI:''})}
                            style={styles.photoTimes}>
                            <Icon 
                                iconStyle={{ color:'#CA2121' }} 
                                type='font-awesome'
                                name='times' 
                                size={10}/>
                        </TouchableHighlight>
    return (
        <View>
            {
                photoURI != '' && photoURI != undefined? clearAvatar:<View></View>
            }
            <TouchableHighlight
                onPress={()=>this.chooseImage()}
                underlayColor={'#111'}
                style={{width:100, height:100, borderRadius:50,}}>
                <View style={styles.imageViewStyle}>
                    {
                        photoURI?
                        <Image 
                            source={{uri:'file:///'+photoURI,}} 
                            style={styles.imageStyle} />
                        :
                        <Icon 
                            size={40} 
                            name="account-box" 
                            type="material" 
                            color="rgba(48, 102, 224, 0.37)"/>
                    }
                </View>
            </TouchableHighlight>
        </View>
    );
  }
}

const mapDispatchToProps = {
    setImageUri
}
export default connect(null, mapDispatchToProps)(Avatar);