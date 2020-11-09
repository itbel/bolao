
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamsScreen from "./Teams";
import TournamentsScreen from "./Tournaments";
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
const Main = createStackNavigator();

export default function MainNavigaton() {
    return (
        <Main.Navigator screenOptions={{ headerStyle: { backgroundColor: "#528C6E" } }} initialRouteName="AuthNavigator" headerMode="screen">
            <Main.Screen name="TabNavigator" component={TabNavigator} />
            <Main.Screen name="AuthNavigator" component={AuthNavigator} />
            <Main.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Main.Screen name="HomeScreen" component={HomeScreen} />
        </Main.Navigator>
    )
}