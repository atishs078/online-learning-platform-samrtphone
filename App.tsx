import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/pages/Login'
import AppText from './src/pages/AppText'
import './global.css'
import SignUp from './src/pages/SignUp'
import Home from './src/pages/Home'
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
