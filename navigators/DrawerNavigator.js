import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator"
import SelectTournament from "../screens/SelectTournament"
import Teams from "../screens/Teams";
import Tournaments from "../screens/Tournaments";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'GuessScreen')
                    return <Image style={focused ? {} : { opacity: 0.3 }} source={GuessIcon}></Image>
                else if (route.name === 'RulesScreen')
                    return <Image style={focused ? {} : { opacity: 0.3 }} source={RulesIcon}></Image>
                else if (route.name === "RoundsScreen")
                    return <Image style={focused ? {} : { opacity: 0.3 }} source={RoundsIcon}></Image>
                else if (route.name === "WinsScreen")
                    return <Image style={focused ? {} : { opacity: 0.3 }} source={WinsIcon}></Image>
                else if (route.name === "RankingsScreen")
                    return <Image style={focused ? {} : { opacity: 0.3 }} source={RankingIcon}></Image>
            }
        }
        )}
            drawerStyle={{ width: "70%", backgroundColor: "#528C6E", borderTopRightRadius: 30, borderBottomRightRadius: 30 }} headerMode="none" initialRouteName="SelectTournament">
            <Drawer.Screen options={{ title: "Select Tournament" }} name="SelectTournament" component={SelectTournament} />
            <Drawer.Screen name="Tournament" component={TabNavigator} />
            <Drawer.Screen name="Teams" component={Teams} />
            <Drawer.Screen name="Manage Tournaments" component={Tournaments} />
        </Drawer.Navigator>
    );
}
