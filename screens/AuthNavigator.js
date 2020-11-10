import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./Login/LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const Auth = createStackNavigator();
export default function AuthNavigator({ navigation }) {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Auth.Screen name="SplashScreen" component={SplashScreen} />
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
      <Auth.Screen name="RegisterScreen" component={RegisterScreen} />
      <Auth.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Auth.Navigator>
  )
}

