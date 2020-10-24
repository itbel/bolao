import React, { useEffect } from "react";
import {View, Text, StyleSheet} from "react-native";
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#23272a",
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:"white",
        fontSize:50
    }
  });
  

export default SplashScreen = ({navigation}) =>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("LoginScreen")
        },3000)

    },[])
    return(
        <View style={styles.container}><Animatable.Text animation="zoomInUp" style={styles.text}>Splash Screen</Animatable.Text></View>
    )
}