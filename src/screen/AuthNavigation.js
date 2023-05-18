import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreeen'
import SignUpScreen from './SingUpScreen'


const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

      </Stack.Navigator>
  )
}

export default AuthNavigation