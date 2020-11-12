import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./AuthNavigator";
import { useUserContext } from "../contexts/UserContext"
import DrawerNavigator from "./DrawerNavigator";
import { Image, TouchableOpacity } from "react-native"
import { DrawerActions } from '@react-navigation/native';

const Root = createStackNavigator();
export default RootStack = (props) => {
    const { userState } = useUserContext();
    return (
        !userState.isLoggedIn ?
            <AuthNavigator></AuthNavigator> :
            <DrawerNavigator></DrawerNavigator>
    )
}

