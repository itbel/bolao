import React from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Platform,
    Alert
} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a3a3a3',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default LoginScreen = ({navigation}) =>{
    return(
        <View style={styles.container}><Text>Login Screen</Text></View>
    )
}