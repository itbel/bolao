import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar, ScrollView, TouchableHighlight, Text } from "react-native";
import SelectTournamentCard from "./SelectTournamentCard"
import Header from "./Header";
import Axios from "axios";
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
    },
    subHeading: {
        marginTop: 90,
        color: "#000",
        fontFamily: "RobotoSlab-Regular",
        fontSize: 26,
    }
});


export default SelectTournament = ({ navigation, route }) => {
    const { userState } = useUserContext();
    const [joinedTournaments, setJoinedTournaments] = useState();
    useEffect(() => {
        const fetchJoinedTournaments = async () => {
            try {
                const response = await fetch(`http://192.168.2.96:3005/api/tournaments/joined`,
                    { headers: { "auth-token": `${userState.user}` } }
                )
                const data = await response.json();
                setJoinedTournaments(data);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchJoinedTournaments()

    }, [])
    return (
        <View style={styles.backgroundd}>
            <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
            <Header title={"Select Tournament"} navigation={navigation}></Header>

            <View style={styles.container}>
                <View style={{ marginHorizontal: 30 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column" }}>
                        {joinedTournaments ? joinedTournaments.map((tournament, index) => {
                            return <SelectTournamentCard key={index} data={tournament} navigation={navigation}></SelectTournamentCard>
                        }) :
                            <>
                                <Text style={styles.subHeading}>No tournaments joined</Text>
                                <TouchableHighlight underlayColor="#85BFA1" onPress={() => navigation.navigate("ManageTournaments")} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Join A Tournament</Text></TouchableHighlight>
                            </>}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}