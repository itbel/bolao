import "react-native-gesture-handler"
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStackScreen from "./screens/RootStackScreen";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      {user ? <>
      </>
      : <RootStackScreen/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
