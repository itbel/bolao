import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useUserContext } from "../contexts/UserContext"
import { useTournamentContext } from "../contexts/TournamentContext";
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        borderRadius: 6
    },
    header: {
        flex: 1,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 22,
        textAlign: "center",
    },
    subHeader: {
        flexDirection: "row",
        fontSize: 16,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
    },
    entry: {
        fontFamily: "RobotoSlab-Regular",
        color: "#9E9E9E"
    },
    buttonStyle: {
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#528C6E",
        paddingVertical: 20,
    },
    buttonLabelStyle: {
        paddingHorizontal: 50,
        textAlign: "center",
        fontSize: 12,
        fontFamily: "RobotoSlab-Bold",
        color: "white"
    },
});
export default function SelectTournamentCard(props: any): JSX.Element {
    const { userState } = useUserContext();
    const { setTournament, selectedTournament } = useTournamentContext();
    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>{props.data.name}</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableHighlight disabled={props.data.tournamentid === selectedTournament.tournament_id} underlayColor="#85BFA1" onPress={() => {
                        setTournament(props.data.tournamentid, props.data.name)
                    }} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Select Tournament</Text></TouchableHighlight>

                </View>
                {props.data.tournamentid === selectedTournament.tournament_id ? <Text style={{ color: "black", textAlign: "center", fontFamily: "RobotoSlab-Bold", fontSize: 12, marginTop: 12 }}>Currently Selected</Text> : null}
            </View>
        </View>
    )

}