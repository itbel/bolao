import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
        marginHorizontal: 60
    },
    header: {
        flex: 1,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 32,
        marginTop: 0
    },
    subHeader: {
        flexDirection: "row",
        paddingBottom: 16,
        fontSize: 20,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
    },
    entry: {
        paddingBottom: 6,
        fontFamily: "RobotoSlab-Regular",
        color: "black"
    }
});
export default function TournamentCard({ data }: any): JSX.Element {
    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>Ranking</Text>
                <View style={styles.subHeader}>
                    <Text style={[{ flex: 1 }, styles.subHeader]}>Player</Text>
                    <Text style={styles.subHeader}>Points</Text>
                </View>
                {
                    data.map((player, index) => {
                        if (player.points !== 0)
                            return (
                                <View key={index} style={{ flexDirection: "row" }}>
                                    <Text style={[styles.entry, { flex: 1 }]}>{index + 1}. {" " + player.name}</Text>
                                    <Text style={styles.entry}>{player.points}</Text>
                                </View>
                            )
                        else return null
                    })
                }
            </View>
        </View>
    )

}