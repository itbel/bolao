import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator"
import SelectTournament from "../screens/SelectTournament"
import Teams from "../screens/Teams";
import Tournaments from "../screens/Tournaments";
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="SelectTournament">
            <Drawer.Screen name="Tournament" component={TabNavigator} />
            <Drawer.Screen name="SelectTournament" component={SelectTournament} />
            <Drawer.Screen name="Teams" component={Teams} />
            <Drawer.Screen name="Tournaments" component={Tournaments} />
        </Drawer.Navigator>
    );
}