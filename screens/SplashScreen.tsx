import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { useUserContext } from "../contexts/UserContext";
import { Auth } from "@aws-amplify/auth";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#528C6E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 86,
    fontFamily: "RobotoSlab-Bold",
  },
});
export default function SplashScreen({ navigation }: any): JSX.Element {
  const { loginUser, userState } = useUserContext();
  const getData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user?.attributes) {
        loginUser(user);
      }
    } catch (e) {
      console.log(e);
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);
  return (
    <>
      <StatusBar hidden></StatusBar>
      <View style={styles.container}>
        <Animatable.Text animation="zoomInUp" style={styles.text}>
          Bolao
        </Animatable.Text>
      </View>
    </>
  );
}
