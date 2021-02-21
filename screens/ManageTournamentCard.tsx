import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useUserContext } from "../contexts/UserContext";
import axios from "axios";
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
    paddingBottom: 8,
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
    color: "white",
  },
});
export default function ManagementTournamentCard({
  data,
  joinedTours,
  fetchJoined,
}: any): JSX.Element {
  const { userState } = useUserContext();

  const joinTournament = async (tourid) => {
    try {
      const response = await axios.patch(
        `http://18.224.228.195:3005/api/tournaments/join`,
        { tournamentid: tourid },
        { headers: { "auth-token": userState.user } }
      );
      fetchJoined();
    } catch (error) {
      console.error(error);
    }
  };
  const leaveTournament = async (tourid) => {
    try {
      const response = await axios.patch(
        `http://18.224.228.195:3005/api/tournaments/leave`,
        { tournamentid: tourid },
        { headers: { "auth-token": userState.user } }
      );
      fetchJoined();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.tournamentCard}>
      <View style={{ margin: 20 }}>
        <Text style={styles.header}>{data.name}</Text>
        <Text style={styles.subHeader}>{data.owner}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableHighlight
            underlayColor="#85BFA1"
            onPress={() => {
              joinTournament(data.tournamentid);
            }}
            disabled={
              joinedTours.find((a) => a.tournamentid === data.tournamentid)
                ?.tournamentid === data.tournamentid
            }
            style={[
              styles.buttonStyle,
              joinedTours.find((a) => a.tournamentid === data.tournamentid)
                ?.tournamentid === data.tournamentid
                ? { backgroundColor: "grey" }
                : {},
            ]}
          >
            <Text style={styles.buttonLabelStyle}>Join</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#85BFA1"
            onPress={() => {
              //leaveTournament(data.tournamentid);
              // leaving is buggy. it is possible to leave all tournaments when leaving one particular tournament. do not use until backend code is reviewed
            }}
            disabled={
              true ??
              joinedTours.find((a) => a.tournamentid === data.tournamentid)
                ?.tournamentid !== data.tournamentid
            }
            style={[styles.buttonStyle, { backgroundColor: "grey" }]}
          >
            <Text style={styles.buttonLabelStyle}>Leave</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
