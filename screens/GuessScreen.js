import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import GuessAccordion from "./GuessAccordion";
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


export default GuessScreen = ({ navigation, route }) => {
    let roundOne = {
        round: 1,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            }
        ]
    }
    let roundTwo = {
        round: 2,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport",
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor" },
                ]
            }
        ]
    }
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Brasileirao"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        <GuessAccordion data={roundTwo} openState={false}></GuessAccordion >
                        <GuessAccordion data={roundOne} openState={false}></GuessAccordion >
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}