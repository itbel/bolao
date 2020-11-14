import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
    },
    roundTitleText: {
        flex: 1, fontFamily: "RobotoSlab-Regular", fontSize: 22
    },
    playerText: {
        color: "#000", fontFamily: "RobotoSlab-Regular", fontSize: 14
    }
});
export default TournamentCard = ({ data }) => {

    return (
        <TouchableOpacity style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.roundTitleText}>{data.title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1 }}>Player</Text>
                    <Text>Points</Text>
                </View>
                {
                    data.players.map((player) => {
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 1 }}>{player.name}</Text>
                                <Text>{player.points}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </TouchableOpacity>
    )

}