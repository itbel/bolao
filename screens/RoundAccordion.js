import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    openCard: {
        flexDirection: "column", marginVertical: 11
    },
    closedCard: {
        flexDirection: "column",
        height: 72,
        marginVertical: 11,
    },
    roundTitleText: {
        flex: 1, fontFamily: "RobotoSlab-Regular", fontSize: 22
    }
});
export default RoundAccordion = ({ openState, data }) => {

    const [open, setOpen] = useState(openState);

    return (
        open ?
            (
                <TouchableOpacity style={styles.openCard} onPress={() => setOpen(false)}>
                    <View style={{ borderBottomWidth: 1, margin: 20, flexDirection: "row" }}>
                        <Text style={styles.roundTitleText}>Round: {data.round}</Text>
                        <Icon name="angle-up" size={40} color="#000" />
                    </View>
                    {data.matches.map((match, matchkey) => {
                        return (
                            <View style={{ marginHorizontal: 20 }} key={matchkey}>
                                <Text style={{ marginVertical: 8, fontFamily: "RobotoSlab-Medium", fontSize: 16 }}>{match.teamAName} {match.teamAResult} X {match.teamBResult} {match.teamBName}</Text>
                                {match.guesses.map((guess, index) => {
                                    return <View key={index} style={{ marginVertical: 2, flexDirection: "row" }}><Text style={{ flex: 1, color: "#9E9E9E", fontFamily: "RobotoSlab-Regular", fontSize: 14 }}>{guess.name}</Text><Text style={{ fontFamily: "RobotoSlab-Regular", fontSize: 14, color: "#9E9E9E" }}>{guess.teamAGuess} X {guess.teamBGuess} ({guess.points})</Text></View>
                                })}
                            </View>
                        )
                    })}
                    <View style={{ marginHorizontal: 20, marginTop: 20, borderTopWidth: 1, marginVertical: 2, flexDirection: "row" }}><Text style={{ marginTop: 10, flex: 1, color: "#000", fontFamily: "RobotoSlab-Regular", fontSize: 14 }}>Igor</Text><Text style={{ marginTop: 10, fontFamily: "RobotoSlab-Regular", fontSize: 14, color: "#9E9E9E" }}>Total:17</Text></View>
                    <View style={{ marginHorizontal: 20, marginVertical: 2, flexDirection: "row" }}><Text style={{ flex: 1, color: "#000", fontFamily: "RobotoSlab-Regular", fontSize: 14 }}>Lucas</Text><Text style={{ fontFamily: "RobotoSlab-Regular", fontSize: 14, color: "#9E9E9E" }}>Total:16</Text></View>
                    <View style={{ marginHorizontal: 20, marginVertical: 2, flexDirection: "row" }}><Text style={{ flex: 1, color: "#000", fontFamily: "RobotoSlab-Regular", fontSize: 14 }}>Gabriel</Text><Text style={{ fontFamily: "RobotoSlab-Regular", fontSize: 14, color: "#9E9E9E" }}>Total:14</Text></View>
                    <View style={{ marginHorizontal: 20, marginBottom: 20, marginVertical: 2, flexDirection: "row" }}><Text style={{ flex: 1, color: "#000", fontFamily: "RobotoSlab-Regular", fontSize: 14 }}>Diego</Text><Text style={{ fontFamily: "RobotoSlab-Regular", fontSize: 14, color: "#9E9E9E" }}>Total:14</Text></View>
                </TouchableOpacity>
            )
            : (
                <TouchableOpacity style={styles.closedCard} onPress={() => setOpen(true)}>
                    <View style={{ margin: 20, flexDirection: "row" }}>
                        <Text style={styles.roundTitleText}>Round: {data.round}</Text>
                        <Icon name="angle-down" size={40} color="#000"></Icon>
                    </View>
                </TouchableOpacity>
            )

    )

}