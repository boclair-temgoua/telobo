
import React, { useEffect, useRef, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'expo-status-bar'

import {
  OnBoarding,

  Login,
  Register,
  ForgotPassword,
  Otp
} from './screens'

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
   
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'OnBoarding'}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// import React, { useEffect, useRef, useState } from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen'

// import {
//     OnBoarding,

//     Login,
//     Register,
//     ForgotPassword,
//     Otp
// } from './screens'

// const Stack = createStackNavigator();

// const App = () => {

//     useEffect(() => {
//         SplashScreen.hide();
//     }, [])

//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 screenOptions={{
//                     headerShown: false
//                 }}
//                 initialRouteName={'OnBoarding'}
//             >
//                 <Stack.Screen
//                     name="OnBoarding"
//                     component={OnBoarding}
//                 />

//                 <Stack.Screen
//                     name="Login"
//                     component={Login}
//                 />

//                 <Stack.Screen
//                     name="Register"
//                     component={Register}
//                 />

//                 <Stack.Screen
//                     name="ForgotPassword"
//                     component={ForgotPassword}
//                 />

//                 <Stack.Screen
//                     name="Otp"
//                     component={Otp}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default App