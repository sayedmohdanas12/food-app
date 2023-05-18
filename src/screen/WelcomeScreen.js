import React from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import logo from '../assets/logo.png'
import { hr80,colors} from '../global/style'


function WeelcomeScreen({navigation}) {
    console.log 
  return (
    <View style={styles.container}> 
    <Text style={styles.title}> 
        Welcome to Foodie
    </Text>
    <View style={styles.logooOut}>
        <Image source={logo} style={styles.logo}/>
    </View>
    <View style={hr80}/>
   <Text style={styles.text}> Find the best Food aroud you at lowest price</Text>
   <View style={hr80}/>
   <View style={styles.btnOut}>
    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
        <Text style={styles.btn}>Sing Up </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.btn}>Log in</Text>
    </TouchableOpacity>
   </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff4242',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    title:{
        fontSize:50,
        color:colors.col1,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'200'
    },
    logooOut:{
        width:'80%',
        height:'30%',
        backgroundColor:'#fff',
        alignItems:'center',
    },
    logo:{
        width:'100%',
        height:'100%'
    },
    text:{
        fontSize:18,
        width:'80%',
        color:colors.col1,
    },
    btnOut:{
        flexDirection:'row'
    },
    btn:{
        fontSize:24,
        color:colors.text1,
        borderRadius:10,
        padding:10,
        paddingHorizontal:29,
        backgroundColor:'white',
        fontWeight:'700',
        marginVertical:30,
        marginHorizontal:10,


    }
})

export default WeelcomeScreen