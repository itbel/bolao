import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    header: {
        flex: 1,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 22,
        textAlign: "center",
        borderBottomWidth: 1,
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
    }
});
export default TournamentCard = ({ data }) => {

    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>{data.title}</Text>
                <View style={styles.subHeader}>
                    <Text style={[{ flex: 1 }, styles.subHeader]}>Player</Text>
                    <Text style={styles.subHeader}>Points</Text>
                </View>
                {
                    data.players.map((player, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row" }}>
                                <Text style={[styles.entry, { flex: 1 }]}>{player.name}</Text>
                                <Text style={styles.entry}>{player.points}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )

}