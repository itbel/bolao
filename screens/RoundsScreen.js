import React, { useEffect } from "react";
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


export default RoundsScreen = ({ navigation, route }) => {

    return (
        <>
            <Header title={"Rounds"} navigation={navigation}></Header>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <View style={styles.container}><Text>Rounds Screen</Text></View>
        </>
    )
}