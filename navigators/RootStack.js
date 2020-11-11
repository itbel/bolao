import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import { useUserContext } from "../contexts/UserContext"
import DrawerNavigator from "./DrawerNavigator";
import { Image, TouchableOpacity } from "react-native"
import { DrawerActions } from '@react-navigation/native';

const Root = createStackNavigator();
export default RootStack = () => {
    const { userState } = useUserContext();
    return (
        <Root.Navigator>
            {userState.isLoggedIn ? (
                <Root.Screen
                    name="Drawer"
                    options={
                        ({ navigation }) => {
                            return (
                                {
                                    headerShown: true,
                                    headerStyle: { backgroundColor: "#528C6E", height: 100 },
                                    headerShown: true,
                                    headerRight: () => (
                                        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ padding: 16, marginRight: 20 }}>
                                            <Image
                                                source={require("../assets/media/burger.png")}
                                            />
                                        </TouchableOpacity>

                                    )
                                })

                        }
                    }
                    component={DrawerNavigator}
                />
            ) : (
                    <Root.Screen
                        name="Auth"
                        options={{ headerShown: false }}
                        component={AuthNavigator}
                    />
                )}
        </Root.Navigator>
    )
}

