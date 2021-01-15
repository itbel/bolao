import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import Header from "./Header";
import ManageTournamentCard from "./ManageTournamentCard"
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext"
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
export default function Tournaments({ navigation, route }: any): JSX.Element {
    const [tournaments, setTournaments] = useState([]);
    useEffect(() => {
        const loadRanking = async () => {
            try {
                const response = await fetch(`http://18.224.228.195:3005/api/tournaments/all`)
                const data = await response.json();
                setTournaments(data)
            } catch (error) {
            }
        }
        loadRanking()
    }, [])
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Manage Tournaments"} navigation={navigation}></Header>
            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        {tournaments && tournaments.length > 0 ? tournaments.map((tour) => {
                            return <ManageTournamentCard data={tour}></ManageTournamentCard>
                        }) : null}
                    </ScrollView>
                </View>
            </View>
        </View>

    )
}