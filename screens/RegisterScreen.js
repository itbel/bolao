import React from "react";
import {View, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a3a3a3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default RegisterScreen = ({navigation}) =>{
    return(
        <View style={styles.container}><Text>Register Screen</Text></View>
    )
}