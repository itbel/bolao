import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import GuessAccordion from "./GuessAccordion";
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext"
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
    },
    subHeading: {
        marginTop: 90,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 26,
    }
});


export default GuessScreen = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { userState } = useUserContext();
    const { selectedTournament } = useTournamentContext();
    const [rounds, setRounds] = useState([])
    useEffect(() => {
        const loadRound = async () => {
            try {
                const response = await fetch(`http://192.168.2.96:3005/api/matches/unguessed/${selectedTournament.tournament_id}`,
                    { headers: { "auth-token": `${userState.user}` } }
                )
                const data = await response.json();
                setRounds(data)
                console.log(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        loadRound()

    }, [selectedTournament])
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Brasileirao"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        {rounds && rounds.length > 0 ? rounds.map((round, index) => {
                            return <GuessAccordion key={index} data={round} openState={index === 0 ? true : false}></GuessAccordion >
                        }) : <Text style={styles.subHeading}>No matches to guess</Text>}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}