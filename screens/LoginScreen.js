import React, { useEffect, useState } from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from "react-native";
import registerBackground from "../assets/media/login.png"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color:"white",
    fontFamily: "RobotoSlab-Bold",
    fontSize:30,
  },
  logoSubheader:{
    color:"white",
    fontSize:20,
    fontFamily:"RobotoSlab-Regular"
  },
  backgroundPic:{
    position:"absolute",
    width:'100%',
    resizeMode:'contain'
  },
  inputText:{
    width:400,
    color:"white",
    borderBottomColor:"white",
    fontFamily:"RobotoSlab",
    fontSize:14,
    borderBottomWidth:2
  },
  
  forgot:{
    color:"white"
  },
  loginText:{
    backgroundColor:"#fff",
    borderRadius:6,
    width:300,
    color:"#225B00",
    padding:16,
    fontSize:16,
    fontWeight:"bold"
  }
});


export default LoginScreen = ({navigation}) =>{
  const [loginData, setloginData] = useState({
    username: "",
    password: ""
  });
  useEffect(()=>{
    console.log(loginData)
  },[loginData.username])
    return(

      <View style={styles.container}>
      <Image style={styles.backgroundPic} source={registerBackground}></Image>
      <Text style={styles.logo}>Login</Text>
      <Text style={styles.logoSubheader}>Please login to your account</Text>
      <View style={styles.inputView} >
        <TextInput  
          onFocus={() => {}}
          value={loginData.username}
          style={styles.inputText}
          placeholder="Username..." 
          placeholderTextColor="white"
          onChangeText={user => setloginData({username:user})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          value={loginData.password}
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="white"
          onChangeText={pass => setloginData({password:pass})}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{color:"white"}}>Don't have an account? <Text onPress={() => navigation.navigate("RegisterScreen")} style={{fontWeight:"bold"}}>Signup</Text></Text>

    </View>
    )
}