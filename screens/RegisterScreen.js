import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from "react-native";
import registerBackground from "../assets/media/login.png"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a3a3a3',
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
  

export default RegisterScreen = ({navigation}) =>{
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
    email:"",
  });
    return(
      <View style={styles.container}>

      <Image style={styles.backgroundPic} source={registerBackground}></Image>
      <Text style={styles.logo}>Register</Text>
      <Text style={styles.logoSubheader}>Create an account to login</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          value={loginData.username}
          placeholderTextColor="white"
          onChangeText={user => setloginData({username:user})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          value={loginData.password}
          style={styles.inputText}
          placeholder="Username..." 
          placeholderTextColor="white"
          onChangeText={pass => setloginData({password:pass})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          value={loginData.password}
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="white"
          onChangeText={pass => setloginData({password:pass})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          value={loginData.password}
          style={styles.inputText}
          placeholder="Retype Password..." 
          placeholderTextColor="white"
          onChangeText={pass => setloginData({password:pass})}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <Text style={{color:"white"}}>Already have an account? <Text onPress={() => navigation.navigate("LoginScreen")} style={{fontWeight:"bold"}}>Login</Text></Text>

    </View>
    )
}