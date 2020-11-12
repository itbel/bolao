import "react-native-gesture-handler";
import React from "react";
import RootStack from "./navigators/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./contexts/UserContext"
import { DefaultTheme } from "react-native"

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserProvider>
  );
}