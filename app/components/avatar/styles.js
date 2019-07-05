import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    photoTimes:{
        width:21,
        height:21,
        marginLeft:95,
        backgroundColor:'#fff',
        borderRadius:50,
        marginTop: 0,
        position: 'absolute',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.28,
        shadowRadius: 6,
        elevation: 6,
    },
    imageViewStyle:{
        flex:1,
        backgroundColor:'#E7E7E7', 
        borderRadius:50, 
        justifyContent:'center', 
        alignItems:'center'
    },
    imageStyle:{ 
        width:100,
        height:100,
        borderRadius:50, 
        borderWidth:2, 
        borderColor:'#3066E0', 
        backgroundColor:'#E7E7E7'
    }
})