import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { useUserContext } from "../contexts/UserContext"
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const { loginUser, userState } = useUserContext();
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken')
      const name = await AsyncStorage.getItem('userName')
      if (token !== null && name !== null) {
        loginUser({ token: token.replace(/['"]+/g, ''), name: name.replace(/['"]+/g, '') })
      }
    } catch (e) {
      console.log("Error reading asyncStorage")
    }
  }
  useEffect(() => {
    setTimeout(() => {
      getData()
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }, 1000);
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
