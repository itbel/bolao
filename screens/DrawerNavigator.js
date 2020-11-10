
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tournaments from "./Tournaments";
import Teams from './Teams'
import HomeScreen from "./HomeScreen"
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen">
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Tournaments" component={Tournaments} />
            <Drawer.Screen name="Teams" component={Teams} />
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
    );
}