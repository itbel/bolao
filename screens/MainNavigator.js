
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "./TabNavigator"
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
const Main = createStackNavigator();

export default function MainNavigaton() {
    return (
        <Main.Navigator screenOptions={{ headerStyle: { backgroundColor: "#528C6E", height: 100 } }} headerMode="screen" initialRouteName="AuthNavigator" >
            <Main.Screen name="TabNavigator" component={TabNavigator} />
            <Main.Screen options={{ headerShown: false }} name="AuthNavigator" component={AuthNavigator} />
            <Main.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Main.Navigator>
    )
}