import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{ flexDirection:'column', marginTop:5, marginLeft:40, marginRight:32,},
    inputLabels:{fontFamily:'UbuntuBold', fontSize:13, color:'#252D76', opacity:0.5, marginLeft:0, paddingLeft:0},
    inputStyle:{padding:0, borderColor:'#252D7633', borderBottomWidth:1, marginTop:10, marginBottom:3, fontFamily:'QuicksandBold', fontWeight:'bold', color:'#252D76'},
    topWords:{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', paddingHorizontal:40, paddingTop:34},
    iconStyle:{borderBottomColor:'#252D7633',borderBottomWidth:1, padding:6.5},
    errorTextStyle:{fontFamily:'Roboto',fontSize:12, lineHeight:14, color:'#E81D4E'}
})