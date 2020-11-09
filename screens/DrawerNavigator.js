
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tournaments from "./Tournaments";
import Teams from './Teams'
import HomeScreen from "./HomeScreen"
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator creenOptions={{ headerStyle: { backgroundColor: "#528C6E" }, headerShown: true }} headerMode="screen" initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Tournaments" component={Tournaments} />
            <Drawer.Screen name="Teams" component={Teams} />
        </Drawer.Navigator>
    );
}