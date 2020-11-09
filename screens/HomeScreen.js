import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          style={{ right: 20, }}
          source={require("../assets/media/burger.png")}
        />
      )
    })
  }, [navigation])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Select Tournament" onPress={() => navigation.push('DrawerNavigator', { screen: 'Home' })}></Button>

      </View>

    </>
  )
}