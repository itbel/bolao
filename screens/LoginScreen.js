import React, { useEffect } from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Platform,
    Alert,
    Button
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
        <View style={styles.container}>
          <Text>Login Screen</Text>
          <View style={{marginTop:30}}>
            <Button 
            title="Register" 
            onPress={()=> navigation.navigate("RegisterScreen")}
            />
          </View>
          </View>
    )
}