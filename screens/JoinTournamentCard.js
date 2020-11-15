import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    tournamentCard: {
        flexDirection: "column",
        marginVertical: 11,
        borderWidth: 1
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
export default JoinTournamentCard = (props) => {

    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>{props.data.title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableHighlight underlayColor="#85BFA1" onPress={() => props.navigation.navigate("Tournament")} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Select Tournament</Text></TouchableHighlight>
                </View>

            </View>
        </View>
    )

}