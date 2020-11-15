import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Header from "./Header";
import TournamentCard from "./TournamentCard"
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


export default RankingsScreen = ({ navigation, route }) => {
    let data = {
        title: "Brasileirao 2020",
        players: [
            { name: "Igor", points: "170" },
            { name: "Gabriel", points: "159" },
            { name: "Diego", points: "158" },
            { name: "Lucas", points: "155" },
        ]
    }
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Brasileirao"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        <TournamentCard data={data} ></TournamentCard>
                    </ScrollView>
                </View>
            </View>
        </View>

    )
}