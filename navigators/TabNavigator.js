import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RulesScreen from "../screens/RulesScreen";
import GuessScreen from "../screens/GuessScreen";
import RoundsScreen from "../screens/RoundsScreen";
import WinsScreen from "../screens/WinsScreen";
import RankingsScreen from "../screens/RankingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="RoundsScreen">
            <Tab.Screen name="GuessScreen" component={GuessScreen} />
            <Tab.Screen name="RulesScreen" component={RulesScreen} />
            <Tab.Screen name="RoundsScreen" component={RoundsScreen} />
            <Tab.Screen name="WinsScreen" component={WinsScreen} />
            <Tab.Screen name="RankingsScreen" component={RankingsScreen} />
        </Tab.Navigator>
    );
}