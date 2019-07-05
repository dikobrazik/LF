import { StyleSheet } from 'react-native';
export const homeStyles = StyleSheet.create({
    topContainer:{flex:1.5, alignItems:'center', justifyContent:'space-between', marginBottom:8, paddingTop:50},
    bottomContainer:{flex:1, alignContent:"center", justifyContent:'center'},
    submitButtonStyle:{marginHorizontal:95, paddingVertical:7, borderRadius:23, justifyContent:'center', alignItems:'center',backgroundColor:'#FFFFFF', shadowColor:'rgba(0, 0, 0, 0.1)',},
    bigBoldText:{fontFamily:'RobotoSlabBold', fontSize:29, lineHeight:35, color:'#FFFFFF'},
    smallBoldText:{fontFamily:'QuicksandBold', fontWeight:'bold',  fontSize:14, lineHeight:17, color:'#FFFFFF'},
})