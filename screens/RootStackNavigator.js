import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import LoginScreen from "./Login/LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import { useUserContext } from "../contexts/UserContext"
const RootStack = createStackNavigator();
export default RootStackNavigator = ({ navigation }) => {
  const { userState } = useUserContext();
  return (
    <RootStack.Navigator headerMode="screen" initialRouteName="SplashScreen">
      {!userState.isLoggedIn ?
        <>
          <RootStack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
          <RootStack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
          <RootStack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </>
        :
        <RootStack.Screen options={{ headerMode: "float", title: "Home", headerStyle: { backgroundColor: "#528C6E", height: 70 }, headerTitleStyle: { color: "white", marginLeft: 30 } }} name="HomeScreen" component={HomeScreen} />
      }
    </RootStack.Navigator>
  )
}

