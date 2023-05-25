import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors, titles, btn1, hr80 } from '../global/style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




function LoginScreeen({navigation}) {
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.head1}>
        sign in
      </Text>
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={24} color={emailFocus ? colors.text1 : colors.text2} />


        <TextInput style={styles.input} placeholder='Email ' onFocus={
          () => {
            setEmailFocus(true)
            setPasswordFocus(false)
            setShowPassword(false)
          }
        } />
      </View >
      <View style={styles.inputContainer} >
        <AntDesign name="lock1" size={24} color={passwordFocus ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Password' onFocus={
          () => {
            setPasswordFocus(true)
            setEmailFocus(false)
          }
        }
          secureTextEntry={!showPassword ? true : false} />
        <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="black" onPress={() => {
          setShowPassword(!showPassword)
        }} />


      </View>
      <TouchableOpacity style={btn1}>
        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold', textAlign: 'center' }} onPress={()=>navigation.navigate('Home')} >Sing in</Text>
      </TouchableOpacity>


      <Text style={styles.forgt}> Forgot Password ?</Text>
      <Text style={styles.or}> OR </Text>
      <Text style={styles.gftx}> Sign in With </Text>

      <View style={styles.icon}>
        <TouchableOpacity style={styles.gfIcon}>
          <FontAwesome name="google" size={24} color="#EA4335" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.gfIcon}>
          <FontAwesome5 name="facebook-f" size={24} color="#4267b2" />

        </TouchableOpacity>
      </View>

      <View style={hr80} />
      <View style={{flexDirection:'row'}}>
      <Text>Don't have any Account?</Text>
   <Text  style={{color:colors.text1,fontSize:14,fontWeight:'bold',marginBottom:10}}> Sign Up</Text>
      </View>
   


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',


  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical: 10,
    justifyContent: 'space-around'


  },
  inputContainer: {
    borderRadius: 10,
    elevation: 20,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: colors.col1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    padding: 10,
    margin: 15
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forgt: {
    color: colors.text2,
    margin: 20,
    // marginbottom: 10,
  },
  or: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: colors.text1
  },
  gftx: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 25,
  },
  icon: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around'
  },
  gfIcon: {
    backgroundColor: 'white',
    width: 50,
    elevation: 20,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'

  }

})

export default LoginScreeen