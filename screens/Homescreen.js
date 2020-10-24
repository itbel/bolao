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
  

export default HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}><Text>Home Screen</Text></View>
    )
}