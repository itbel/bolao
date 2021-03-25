import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import { Assets } from "../Assets";
import Axios from "axios";
import { Auth } from "@aws-amplify/auth";
import { ActivityIndicator } from "react-native";
const styles = StyleSheet.create({
  backgroundPic: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  content: {
    marginTop: 12,
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
    marginHorizontal: 20,
    marginVertical: 12,
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
    marginVertical: 24,
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
export default function RegisterScreen({ navigation }: any): JSX.Element {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    password: "",
    email: "",
    name: "",
    code: "",
  });
  const [showVerify, setShowVerify] = useState(false);
  const isValidPass = (pass) => {
    let isRequiredLength = pass?.length >= 4;
    let hasNoWhitespace = !/\s/.test(pass);
    return isRequiredLength && hasNoWhitespace;
  };
  const isValidName = (name) => {
    let isRequiredLength = name?.length > 0 && name?.length < 10;
    let hasNoWhitespace = !/\s/.test(name);
    let hasNoSymbols = !/[!@#~$%^&*()_+=[{\]};:<>\\|.`/?,-]/.test(name);
    return isRequiredLength && hasNoWhitespace && hasNoSymbols;
  };
  const resendCode = async () => {
    if (registerData.email) {
      setIsLoading(true);
      try {
        await Auth.resendSignUp(registerData.email.trim());
        ToastAndroid.show("Code resent successfully.", ToastAndroid.SHORT);
      } catch (err) {
        ToastAndroid.show(
          "There was an error sending your verification code",
          ToastAndroid.SHORT
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      ToastAndroid.show("Please enter your e-mail", ToastAndroid.SHORT);
    }
  };
  const verify = async () => {
    if (registerData.email && registerData.code) {
      setIsLoading(true);
      try {
        const user = await Auth.confirmSignUp(
          registerData.email.trim(),
          registerData.code.trim()
        );
        console.log(user);
        ToastAndroid.show("Verified Successfully.", ToastAndroid.SHORT);
        navigation.navigate("LoginScreen");
      } catch (err) {
        ToastAndroid.show(
          "There was an error while verifying your account.",
          ToastAndroid.SHORT
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      ToastAndroid.show(
        "Please enter your e-mail and verification code",
        ToastAndroid.SHORT
      );
    }
  };
  const register = async () => {
    if (isValidPass(registerData.password)) {
      if (isValidName(registerData.name)) {
        setIsLoading(true);
        try {
          const { user } = await Auth.signUp({
            username: registerData.email.trim(),
            password: registerData.password.trim(),
            attributes: {
              name: registerData.name.trim(),
            },
          });
          console.log(user);
          ToastAndroid.show("Registered Successfully.", ToastAndroid.SHORT);
          setShowVerify(true);
          setRegisterData({ ...registerData, password: "", name: "" });
        } catch (err) {
          console.log(err);
          ToastAndroid.show(
            "There was an error while registering.",
            ToastAndroid.SHORT
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        ToastAndroid.show("Invalid Name.", ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show("Invalid Password.", ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground
      style={styles.backgroundPic}
      source={Assets.media.register}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <View>
          <Text style={styles.logoHeader}>
            {showVerify ? "Verify" : "Register"}
          </Text>
          <Text style={styles.logoSubheader}>
            {showVerify
              ? "Check your email for your code"
              : "Create an account to login"}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          {showVerify ? (
            <>
              <TextInput
                onFocus={() => {}}
                value={registerData.email}
                style={styles.inputText}
                placeholder="Email..."
                autoCapitalize="none"
                autoCompleteType="email"
                placeholderTextColor="white"
                onChangeText={(email) =>
                  setRegisterData({
                    ...registerData,
                    email: email,
                  })
                }
              />
              <TextInput
                onFocus={() => {}}
                value={registerData.code}
                style={styles.inputText}
                placeholder="Verification code..."
                autoCapitalize="none"
                autoCompleteType="email"
                placeholderTextColor="white"
                onChangeText={(code) =>
                  setRegisterData({
                    ...registerData,
                    code,
                  })
                }
              />

              <TouchableOpacity
                onPress={() => verify()}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Verify</Text>
              </TouchableOpacity>
              <Text
                onPress={() => resendCode()}
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingBottom: 12,
                  fontWeight: "bold",
                }}
              >
                Resend Code
              </Text>
            </>
          ) : (
            <>
              <TextInput
                onFocus={() => {}}
                value={registerData.email}
                style={styles.inputText}
                placeholder="Email..."
                autoCapitalize="none"
                autoCompleteType="email"
                placeholderTextColor="white"
                onChangeText={(email) =>
                  setRegisterData({
                    ...registerData,
                    email: email,
                  })
                }
              />

              <TextInput
                value={registerData.password}
                style={styles.inputText}
                secureTextEntry={true}
                autoCapitalize="none"
                placeholder="Password..."
                placeholderTextColor="white"
                onChangeText={(password) =>
                  setRegisterData({ ...registerData, password })
                }
              />

              <TextInput
                onFocus={() => {}}
                value={registerData.name}
                style={styles.inputText}
                placeholder="Name..."
                placeholderTextColor="white"
                onChangeText={(name) =>
                  setRegisterData({ ...registerData, name })
                }
              />

              <TouchableOpacity onPress={register} style={styles.loginBtn}>
                <Text style={styles.loginText}>Register</Text>
              </TouchableOpacity>
              <Text
                onPress={() => setShowVerify(true)}
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingBottom: 12,
                  fontWeight: "bold",
                }}
              >
                Verify Account
              </Text>
            </>
          )}
        </View>

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
}
