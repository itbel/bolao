import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
const styles = StyleSheet.create({
    tournamentCard: {
        borderWidth: 1,
        borderColor: "#a3a3a3",
        borderRadius: 6,
        flexDirection: "column",
        marginVertical: 11,
    },
    header: {
        flex: 1,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 22,
        textAlign: "center",
        borderBottomColor: "#a3a3a3",
        paddingBottom: 8
    },
    subHeader: {
        textAlign: "center",
        fontSize: 12,
        color: "#4BA813",
        fontFamily: "RobotoSlab-Regular",
    },
    buttonStyle: {
        marginHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
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
export default ManageTournamentCard = ({ data }) => {
    console.log(data)
    return (
        <View style={styles.tournamentCard}>
            <View style={{ margin: 20 }}>
                <Text style={styles.header}>{data.name}</Text>
                <Text style={styles.subHeader}>{data.owner}</Text>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableHighlight underlayColor="#85BFA1" onPress={() => {
                        setTournament(props.data.tournamentid)
                        props.navigation.navigate("Tournament")
                    }} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Join</Text></TouchableHighlight>
                    <TouchableHighlight underlayColor="#85BFA1" onPress={() => {
                        setTournament(props.data.tournamentid)
                        props.navigation.navigate("Tournament")
                    }} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Leave</Text></TouchableHighlight>
                </View>
            </View>
        </View>
    )

}