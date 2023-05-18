import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { colors, titles} from '../global/style'

function LoginScreeen() {
  return (
   <View style={style.container}>
    <Text style={styles.head1}>
        sign in 
    </Text>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex :1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  head1:{
    fontSize:titles.title1,
    color:colors.text1,
    textAlign:'center',
    marginVertical:10,


  }
})

export default LoginScreeen