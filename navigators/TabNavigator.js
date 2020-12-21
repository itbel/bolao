import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from "react-native";
//import RulesScreen from "../screens/RulesScreen";
import GuessScreen from "../screens/GuessScreen";
import RoundsScreen from "../screens/RoundsScreen";
//import WinsScreen from "../screens/WinsScreen";
import RankingsScreen from "../screens/RankingsScreen";
import GuessIcon from "../assets/media/guess.png"
import RulesIcon from "../assets/media/rules.png"
import RoundsIcon from "../assets/media/rounds.png"
import WinsIcon from "../assets/media/wins.png"
import RankingIcon from "../assets/media/rank.png"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Tab.Navigator screenOptions={({ route }) => ({
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
            })}
                tabBarOptions={{
                    labelStyle: { fontFamily: "RobotoSlab-Medium", fontSize: 12 },
                    style: { backgroundColor: "white", height: 80, borderTopRightRadius: 30, borderTopLeftRadius: 30 },
                    tabStyle: { marginBottom: 10, },
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                }}
                initialRouteName="RankingsScreen">
                <Tab.Screen options={{ title: "Guess" }} name="GuessScreen" component={GuessScreen} />
                {/*<Tab.Screen options={{ title: "Rules" }} name="RulesScreen" component={RulesScreen} />*/}
                <Tab.Screen options={{ title: "Rounds" }} name="RoundsScreen" component={RoundsScreen} />
                <Tab.Screen options={{ title: "Ranking" }} name="RankingsScreen" component={RankingsScreen} />
                {/*<Tab.Screen options={{ title: "Wins" }} name="WinsScreen" component={WinsScreen} />*/}
            </Tab.Navigator>
        </View>
    );
}