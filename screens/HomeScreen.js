import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3a3a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
      <View style={styles.container}><Text>Home Screen</Text></View>
    </>
  )
}