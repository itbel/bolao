import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import MainNavigator from "./screens/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./contexts/UserContext"

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
