import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import registerBackground from "../assets/media/register_hi.png";

const styles = StyleSheet.create({
  backgroundPic: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  logoHeader: {
    marginLeft: 48,
    color: "white",
    fontFamily: "RobotoSlab-Bold",
    fontSize: 30,
  },
  logoSubheader: {
    marginLeft: 48,
    marginTop: 8,
    color: "#707070",
    fontSize: 20,
    fontFamily: "RobotoSlab-Regular",
  },
  inputText: {
    marginHorizontal: 48,
    marginVertical: 24,
    color: "white",
    borderBottomColor: "white",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
    borderBottomWidth: 2,
  },
  forgotBtn: {
    position: "absolute",
    right: 0,
    marginRight: 48,
    bottom: "40%",
  },
  forgotText: {
    color: "white",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
  },
  loginBtn: {
    marginHorizontal: 48,
    marginBottom: 48,
  },
  loginText: {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 6,
    color: "#225B00",
    padding: 16,
    height: 56,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen = ({ navigation }) => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
    email: "",
  });
  useEffect(() => {
    console.log(loginData);
  }, [loginData.username]);
  return (
    <ImageBackground style={styles.backgroundPic} source={registerBackground}>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <View>
          <Text style={styles.logoHeader}>Register</Text>
          <Text style={styles.logoSubheader}>Create an account to login</Text>
        </View>
        <View>
          <View style={styles.inputView}>
            <TextInput
              onFocus={() => {}}
              value={loginData.username}
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="white"
              onChangeText={(email) => setloginData({ email: email })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              onFocus={() => {}}
              value={loginData.username}
              style={styles.inputText}
              placeholder="Username..."
              placeholderTextColor="white"
              onChangeText={(user) => setloginData({ username: user })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={loginData.password}
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="white"
              onChangeText={(pass) => setloginData({ password: pass })}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", textAlign: "center" }}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ fontWeight: "bold" }}
          >
            Login
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};