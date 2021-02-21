import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import LandingScreen from "../screens/LandingScreen";
import Teams from "../screens/Teams";
import Tournaments from "../screens/Tournaments";
import SelectTournament from "../screens/SelectTournament";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTournamentContext } from "../contexts/TournamentContext";

type DrawerNavigatorParamList = {
  LandingScreen: undefined;
  SelectTournament: undefined;
  SelectedTournament: undefined;
  ManageTournaments: undefined;
  Teams: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
export default function DrawerNavigator(): JSX.Element {
  const { selectedTournament } = useTournamentContext();
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          return (
            <Icon
              name="angle-right"
              size={20}
              color={focused ? "white" : "#528C6E"}
            />
          );
        },
      })}
      drawerContentOptions={{
        activeTintColor: "#000c00",
        style: { marginTop: 50, marginHorizontal: -5 },
        labelStyle: {
          marginLeft: 5,
          color: "white",
          fontSize: 16,
          fontFamily: "RobotoSlab-Regular",
        },
      }}
      drawerStyle={{
        width: "65%",
        backgroundColor: "#528C6E",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "green",
      }}
      initialRouteName="LandingScreen"
    >
      <Drawer.Screen
        options={{ title: "Home", swipeEnabled: false }}
        name="LandingScreen"
        component={LandingScreen}
      />
      <Drawer.Screen
        options={{ title: "Select Tournament" }}
        name="SelectTournament"
        component={SelectTournament}
      />
      {selectedTournament.tournament_id !== "" ? (
        <Drawer.Screen
          options={{ title: selectedTournament.tournament_name }}
          name="SelectedTournament"
          component={TabNavigator}
        />
      ) : null}
      {false ? <Drawer.Screen name="Teams" component={Teams} /> : null}
      <Drawer.Screen
        options={{ title: "Tournaments List" }}
        name="ManageTournaments"
        component={Tournaments}
      />
    </Drawer.Navigator>
  );
}