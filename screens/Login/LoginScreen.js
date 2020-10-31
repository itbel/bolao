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
import registerBackground from "../../assets/media/login.png";

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

export default LoginScreen = ({ navigation }) => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    console.log(loginData);
  }, [loginData.username]);
  return (
    <ImageBackground style={styles.backgroundPic} source={registerBackground}>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <View>
          <Text style={styles.logoHeader}>Login</Text>
          <Text style={styles.logoSubheader}>Please login to your account</Text>
        </View>
        <View>
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
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
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
  );
};
