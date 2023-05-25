import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { colors, titles, btn1, hr80 } from '../global/style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 





<Feather name="smartphone" size={24} color="black" />
function SingUpScreen({navigation}) {
  const [emailFocus, setEmailFocus] = useState(false)
  const [phoneFocus, setPhoneFocus] = useState(false)

  const [nameFocus, setNameFocus] = useState(false)

  const [passwordFocus, setPasswordFocus] = useState(false)
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.head1}>
        Sign Up
      </Text>
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={24} color={nameFocus ? colors.text1 : colors.text2} />


        <TextInput style={styles.input} placeholder=' Full Name' onFocus={
          () => {
            setNameFocus(true)
            setEmailFocus(false)
            setPhoneFocus(false)
            setPasswordFocus(false)
            setShowPassword(false)
            setConfirmPasswordFocus(false)

          }
        } />


      </View >


      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email" size={24} color={emailFocus ? colors.text1 : colors.text2} />
  
  
          <TextInput style={styles.input} placeholder='Email ' onFocus={
            () => {
              setEmailFocus(true)
              setPhoneFocus(false)
              setPasswordFocus(false)
              setShowPassword(false)
              setNameFocus(false)
              setConfirmPasswordFocus(false)
  
  
            }
          } />
        </View >



      <View style={styles.inputContainer}>
      <Feather name="smartphone" size={24}  color={phoneFocus ? colors.text1 : colors.text2} />
        


        <TextInput style={styles.input} placeholder='Phone' onFocus={
          () => {
            setPhoneFocus(true)
            setEmailFocus(false)
            setPasswordFocus(false)
            setShowPassword(false)
            setNameFocus(false)
            setConfirmPasswordFocus(false)


          }
        } />
      </View >
     
      <View style={styles.inputContainer} >
        <AntDesign name="lock1" size={24} color={passwordFocus ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Password' onFocus={
          () => {
            setPasswordFocus(true)
            setPhoneFocus(false)
            setEmailFocus(false)
            setNameFocus(false)
            setConfirmPasswordFocus(false)

            

          }
        }
          secureTextEntry={!showPassword ? true : false} />
        <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="black" onPress={() => {
          setShowPassword(!showPassword)
        }} />


      </View>
      <View style={styles.inputContainer} >
        <AntDesign name="lock1" size={24} color={confirmPasswordFocus ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Confirm Password' onFocus={
          () => {
            setConfirmPasswordFocus(true)
            setPasswordFocus(false)
            setEmailFocus(false)
            setNameFocus(false)
            setPhoneFocus(false)
            

          }
        }
          secureTextEntry={!showPassword ? true : false} />
        <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="black" onPress={() => {
          setShowPassword(!showPassword)
        }} />


      </View>
      <Text  style={{color:colors.text2}}>Please Enter your Address</Text>
      <View style={styles.inputContainer} >
        <TextInput style={styles.input} placeholder='Enter your Address'
         
      />


      </View>

      <TouchableOpacity style={btn1}>
        <Text style={{ color: colors.col1, fontSize: titles.btntxt, fontWeight: 'bold', textAlign: 'center' }}>Sing in</Text>
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
      <Text>Already  have  Account</Text>
   <Text  style={{color:colors.text1,fontWeight:'bold',marginBottom:10}} onPress={()=>navigation.navigate('Login')}> Sign In</Text>
      </View>
   


    </View>
    </ScrollView>
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
  marginBottom: 5,
  },
  or: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: colors.text1
  },
  gftx: {
    color: colors.text2,
    marginVertical: 0,
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

export default SingUpScreen