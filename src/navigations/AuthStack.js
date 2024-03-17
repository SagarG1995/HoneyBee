import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Onboard from '../screens/Onboard';
import Otp from '../screens/Otp';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false
   }} initialRouteName='onboard' >
    <Stack.Screen component={Onboard} name='onboard' />
    <Stack.Screen component={Login} name='login' />
    <Stack.Screen component={Otp} name='otp' />
   </Stack.Navigator>
  )
}

export default AuthStack