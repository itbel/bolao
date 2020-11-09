import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a3a3a3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default RankingsScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <View style={styles.container}><Text>Rankings Screen</Text></View>
        </>
    )
}