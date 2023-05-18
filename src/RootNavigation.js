import React from 'react'
import AuthNavigation from './screen/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';


function RootNavigation() {
  return (
    <NavigationContainer>
     <AuthNavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation