import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Onboard from '../screens/Onboard';
import Otp from '../screens/Otp';
import Signup from '../screens/Signup';

import Home from '../screens/Home';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='onboard' >
      <Stack.Screen component={Onboard} name='onboard' />
      <Stack.Screen component={Login} name='login' />
      <Stack.Screen component={Otp} name='otp' />
      <Stack.Screen component={Signup} name='signup' />

      {/* <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} /> */}
    </Stack.Navigator>
  )
}

export default AuthStack