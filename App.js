import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStackNavigator from "./screens/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user ? <></> : <RootStackNavigator />}
    </NavigationContainer>
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
