import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Header from "./Header";
import Crown from "../assets/media/crown.png"
const styles = StyleSheet.create({
  backgroundd: {
    backgroundColor: "#528C6E",
    flex: 1,
  },
  container: {
    marginHorizontal: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 5,
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
  }
});
const Ranking = () => {
  let players = [{
    name: "Igor Belem",
    wins: 4
  }, {
    name: "Gabriel Belem",
    wins: 3
  }, {
    name: "Diego Belem",
    wins: 3
  }, {
    name: "Lucas Belem",
    wins: 1
  }]
  return (
    players.map((player, key) => {
      if (key < 5)
        return (<View key={key} style={key === players.length - 1 ? { padding: 16 } : { padding: 16, borderBottomWidth: 1, borderBottomColor: "#d3d3d3" }}>
          <View style={{ flexDirection: "row" }} >
            <View style={{ width: 50, height: 50, backgroundColor: "#528C6E", borderRadius: 100, justifyContent: "center", alignItems: "center" }}><Text style={{ fontFamily: "RobotoSlab-Bold", fontSize: 14, color: "white" }}>{key + 1}</Text></View>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: "RobotoSlab-Regular", fontSize: 18, marginLeft: 50, textAlign: "left", color: "black" }}>{player.name}</Text>
              <Text style={{ marginTop: 4, fontFamily: "RobotoSlab-Regular", fontSize: 12, marginLeft: 50, textAlign: "left", color: "black" }}>Wins: {player.wins} {key === 0 ? <Image source={Crown}></Image> : null}</Text>
            </View>
          </View>
        </View >

        )
      else return null
    })
  )
}

export default SelectTournament = ({ navigation, route }) => {
  return (
    <View style={styles.backgroundd}>
      <StatusBar barStyle="dark-content" backgroundColor="#528C6E" ></StatusBar>
      <Header title={"Welcome"} navigation={navigation}></Header>
      <View style={styles.container}>
        <Text style={styles.heading}>Overall Ranking</Text>
        <View
          style={{
            marginHorizontal: 30,
          }}>
          <Ranking />
        </View>


        <TouchableHighlight underlayColor="#85BFA1" onPress={() => navigation.navigate("Tournament")} style={styles.buttonStyle}><Text style={styles.buttonLabelStyle}>Select Tournament</Text></TouchableHighlight>
      </View>
    </View>

  )
}