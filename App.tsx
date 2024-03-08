import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigations/Navigation'

export default function App() {
  return (
    <NavigationContainer>
        <MainNavigation />
    </NavigationContainer>
  )
}