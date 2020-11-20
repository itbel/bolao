import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
    },
    header: {
        flex: 1,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 22,
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#a3a3a3",
        paddingBottom: 16
    },
    subHeader: {
        flexDirection: "row",
        paddingBottom: 2,
        fontSize: 16,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
    },
    entry: {
        paddingBottom: 6,
        fontFamily: "RobotoSlab-Regular",
        color: "#9E9E9E"
    }
});
export default TournamentCard = ({ data }) => {
    console.log(data)
    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>Brasileirao</Text>
                <View style={styles.subHeader}>
                    <Text style={[{ flex: 1 }, styles.subHeader]}>Player</Text>
                    <Text style={styles.subHeader}>Points</Text>
                </View>
                {
                    data.map((player, index) => {
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