import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import RoundAccordion from "./RoundAccordion";
import Header from "./Header";
import { useUserContext } from "../contexts/UserContext"
import Axios from "axios";
import { useTournamentContext } from "../contexts/TournamentContext";

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
    const { userState } = useUserContext();
    const { selectedTournament } = useTournamentContext();
    const [rounds, setRounds] = useState([]);
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
    const fetchJoinedTournaments = async () => {
        try {
            console.log(userState.user)
            const response = await fetch(`http://192.168.2.95:3005/api/tournaments/joined`,
                { headers: { "auth-token": `${userState.user}` } }
            )
            const data = await response.json();
            setJoinedTournaments(data);
        }
        catch (error) {
            console.log(error)
        }
    }
    fetchJoinedTournaments()
    useEffect(() => {
        /* const getMaxRound = async () => {
            try {
                const response = await fetch(`http://192.168.2.95:3005/api/matches/maxround/${selectedTournament}`,
                    { headers: { "auth-token": `${userState.user}` } })
                const data = await response.json();
                //setState here return data;
            } catch (error) {
                console.log(error)
            }
            getMaxRound();
        } */
        const loadRound = async () => {
            try {
                const response = await fetch(`http://192.168.2.95:3005/api/matches/round/${selectedTournament}&${1}`,
                    { headers: { "auth-token": `${userState.user}` } }
                )
                const data = await response.json();
                return data;
            } catch (error) {
                console.log(error)
            }
        }
        loadRound()
    }, [])
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Brasileirao"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        <RoundAccordion data={roundFive} openState={true}></RoundAccordion >
                    </ScrollView>

                </View>
            </View>
        </View>

    )
}