import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, ActivityIndicator } from "react-native";
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
        marginTop: 60,
        marginBottom: 20,
        marginHorizontal: 30,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
    }
});


export default RoundsScreen = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { userState } = useUserContext();
    const { selectedTournament } = useTournamentContext();
    const [rounds, setRounds] = useState([]);
    const loadRound = async () => {
        try {
            const response = await fetch(`http://192.168.2.96:3005/api/matches/allmatches/${selectedTournament.tournament_id}`,
                { headers: { "auth-token": `${userState.user}` } }
            )
            const data = await response.json();
            setRounds(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        loadRound()
    }, [])
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={selectedTournament.tournament_name} navigation={navigation}></Header>

            <View style={styles.container}>
                <View >
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        <Text style={styles.heading}>Rounds</Text>
                        <View style={{ marginHorizontal: 30 }}>
                            {isLoading ? <ActivityIndicator animating={isLoading} color={"#000"} size={'large'}></ActivityIndicator> : null}
                            {rounds ? rounds.map((round, index) => {
                                return <RoundAccordion key={index} data={round} openState={false}></RoundAccordion >
                            })
                                : null}
                        </View>
                    </ScrollView>

                </View>
            </View>
        </View>

    )
}