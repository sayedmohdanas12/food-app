import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreeen'
import SignUpScreen from './SingUpScreen'
import HomeScreen from './HomeScreeen'

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen}  />
        <Stack.Screen name ='Home' component ={HomeScreen}  options={{headerShown:false}}/>

      </Stack.Navigator>
  )
}

export default AuthNavigation