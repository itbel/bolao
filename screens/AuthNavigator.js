import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./Login/LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const Auth = createStackNavigator();
export default function AuthNavigator({ navigation }) {
  return (
    <Auth.Navigator headerMode="screen" initialRouteName="SplashScreen">
      <Auth.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Auth.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Auth.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
      <Auth.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Auth.Navigator>
  )
}

