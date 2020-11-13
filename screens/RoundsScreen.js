import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import RoundAccordion from "./RoundAccordion";
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


export default RoundsScreen = ({ navigation, route }) => {
    let roundOne = {
        round: 1,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo", teamAResult: 1, teamBResult: 2,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras", teamAResult: 2, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco", teamAResult: 3, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport", teamAResult: 2, teamBResult: 0,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            }
        ]
    }
    let roundTwo = {
        round: 2,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo", teamAResult: 1, teamBResult: 2,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras", teamAResult: 2, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco", teamAResult: 3, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport", teamAResult: 2, teamBResult: 0,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            }
        ]
    }
    let roundThree = {
        round: 3,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo", teamAResult: 1, teamBResult: 2,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras", teamAResult: 2, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco", teamAResult: 3, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport", teamAResult: 2, teamBResult: 0,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            }
        ]
    }
    let roundFour = {
        round: 4,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo", teamAResult: 1, teamBResult: 2,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras", teamAResult: 2, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco", teamAResult: 3, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport", teamAResult: 2, teamBResult: 0,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            }
        ]
    }
    let roundFive = {
        round: 5,
        matches: [
            {
                teamAName: "Fluminense", teamBName: "Botafogo", teamAResult: 1, teamBResult: 2,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Internacional", teamBName: "Palmeiras", teamAResult: 2, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Flamengo", teamBName: "Vasco", teamAResult: 3, teamBResult: 1,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
                ]
            },
            {
                teamAName: "Corinthians", teamBName: "Sport", teamAResult: 2, teamBResult: 0,
                guesses: [
                    { teamAGuess: 1, teamBGuess: 2, name: "Igor", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Lucas", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Gabriel", points: 0 },
                    { teamAGuess: 1, teamBGuess: 2, name: "Diego", points: 0 },
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
                        <RoundAccordion data={roundFive} openState={true}></RoundAccordion >
                        <RoundAccordion data={roundFour} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundThree} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundTwo} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundOne} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundTwo} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundOne} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundTwo} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundOne} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundTwo} openState={false}></RoundAccordion >
                        <RoundAccordion data={roundOne} openState={false}></RoundAccordion >
                    </ScrollView>

                </View>
            </View>
        </View>

    )
}