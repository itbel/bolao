import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, TouchableHighlight, Text } from "react-native";
import JoinTournamentCard from "./JoinTournamentCard"
import Header from "./Header";
const styles = StyleSheet.create({
    backgroundd: {
        backgroundColor: "#528C6E",
        flex: 1,
    },
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        flex: 1,
        marginHorizontal: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
    },
    buttonStyle: {
        marginTop: 30,
        marginHorizontal: 30,
        backgroundColor: "#528C6E",
        paddingVertical: 25,
    },
    buttonLabelStyle: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "RobotoSlab-Bold",
        color: "white"
    },
    heading: {
        marginTop: 90,
        marginBottom: 50,
        marginHorizontal: 30,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
    }
});


export default SelectTournament = ({ navigation, route }) => {
    let data = {
        title: "Brasileirao 2020",
    }
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Brasileirao"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        <JoinTournamentCard navigation={navigation} data={data} ></JoinTournamentCard>
                        <TouchableHighlight underlayColor="#85BFA1" onPress={() => navigation.navigate("Tournament")} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Create A Tournament</Text></TouchableHighlight>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}