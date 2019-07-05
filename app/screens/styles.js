import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
export const styles = StyleSheet.create({
    inputLabels:{fontFamily:'UbuntuBold', fontSize:13, color:'#252D76', opacity:0.5},
    inputStyle:{padding:0, borderColor:'#252D7633', borderBottomWidth:1, marginVertical:10, fontFamily:'QuicksandBold', fontWeight:'bold', color:'#252D76'},
    mainHeaderTextStyle:{fontFamily:'RobotoSlabBold', fontSize:29, color:'#252D76'},
    secondaryHeaderTextStyle:{fontFamily:'RobotoSlabBold', fontSize:15, color:'#AEAEAE',},
    topWords:{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:40, paddingTop:34},
    submitButtonStyle:{borderRadius:23, width:screenWidth/2.3, paddingVertical:7,alignItems:'center', justifyContent:'center'},
    submitButtonTextStyle:{fontFamily:'QuicksandBold', fontWeight:'bold', fontSize:14 ,},
    inputFormStyle:{flexDirection:'column', marginTop:60, marginLeft:40, marginRight:32,},
    secondaryText:{fontFamily:'Montserrat', fontSize:14, fontWeight:'600', lineHeight:20},
    privacyPolicyContainer:{flexDirection:'row',alignItems:'center', marginTop:10, marginHorizontal:70},
    privacyPolicyText:{fontFamily:'Montserrat',fontSize:14, fontWeight:'500', lineHeight:20, marginTop:5, color:'#252D76'},
    signInHeaderTextContainerStyle:{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:32, paddingTop:34},

})