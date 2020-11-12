import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Header from "./Header";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Tournaments = ({ navigation, route }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={route.name} navigation={navigation}></Header>
            <View style={styles.container}><Text>Tournaments Screen</Text></View>
        </>
    )
}