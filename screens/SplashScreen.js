import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23272a",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#528C6E",
  },
  text: {
    color: "white",
    fontSize: 86,
    fontFamily: "RobotoSlab-Bold",
  },
});

export default SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar hidden ></StatusBar>
      <View style={styles.container}>
        <Animatable.Text animation="zoomInUp" style={styles.text}>
          Bolao
      </Animatable.Text>
      </View>
    </>
  );
};
