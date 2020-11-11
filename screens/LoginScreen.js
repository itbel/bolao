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
  StatusBar
} from "react-native";
import registerBackground from "../assets/media/login.png";
import Axios from "axios";
import { useUserContext } from "../contexts/UserContext"

export default LoginScreen = ({ navigation }) => {
  const { loginUser, userState } = useUserContext();
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const signIn = () => {
    loginUser("")
    console.log()
    /* console.log("attempting to login");
    Axios.post("http://18.224.228.195:3005/api/users/login", {
      username: loginData.username,
      password: loginData.password,
    })
      .then((response) => {
        if (response.data.msg !== "Invalid Credentials!") {
          loginUser(response.data)
          // if user has not joined a tournament yet, he should be directed to the tournaments screen
          // in drawer navigator
        }
      })
      .catch((error) => {
        console.log(error);
      }); */
  };
  return (
    <>
      <StatusBar></StatusBar>
      <ImageBackground style={styles.backgroundPic} source={registerBackground}>
        <KeyboardAvoidingView behavior="padding" style={styles.content}>
          <View>
            <Text style={styles.logoHeader}>Login</Text>
            <Text style={styles.logoSubheader}>Please login to your account</Text>
          </View>
          <View>
            <View style={styles.inputView}>
              <TextInput
                onFocus={() => { }}
                value={loginData.username}
                style={styles.inputText}
                placeholder="Username..."
                placeholderTextColor="white"
                onChangeText={(user) =>
                  setloginData({ ...loginData, username: user })
                }
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                value={loginData.password}
                placeholder="Password..."
                placeholderTextColor="white"
                secureTextEntry={true}
                style={styles.inputText}
                onChangeText={(pass) =>
                  setloginData({ ...loginData, password: pass })
                }
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
                style={styles.forgotBtn}
              >
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={signIn} style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: "white", textAlign: "center" }}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("RegisterScreen")}
              style={{ fontWeight: "bold" }}
            >
              Signup
          </Text>
          </Text>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>

  );
};

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
    marginBottom: 48,
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
    bottom: "65%",
  },
  forgotText: {
    color: "white",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
  },
  loginBtn: {
    marginHorizontal: 48,
    marginBottom: 48,
    marginTop: -70,
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
