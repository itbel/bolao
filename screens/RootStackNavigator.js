import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./Login/LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const RootStack = createStackNavigator();

const RootStackNavigator = ({ navigation }) => (
  <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
    <RootStack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
  </RootStack.Navigator>
);

export default RootStackNavigator;
