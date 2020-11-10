import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RulesScreen from "./RulesScreen";
import GuessScreen from "./GuessScreen";
import RoundsScreen from "./RoundsScreen";
import WinsScreen from "./WinsScreen";
import RankingsScreen from "./RankingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="RoundsScreen">
            <Tab.Screen name="GuessScreen" component={GuessScreen} />
            <Tab.Screen name="RulesScreen" component={RulesScreen} />
            <Tab.Screen name="RoundsScreen" component={RoundsScreen} />
            <Tab.Screen name="WinsScreen" component={WinsScreen} />
            <Tab.Screen name="RankingsScreen" component={RankingsScreen} />
        </Tab.Navigator>
    );
}