import React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ navigation, title }) => {
    return (
        <Appbar.Header style={{ backgroundColor: "#528C6E", height: 120 }}>
            {title !== "Welcome" ? <Appbar.BackAction onPress={() => { navigation.goBack() }} /> : null}
            <Appbar.Content titleStyle={{ fontSize: 23, fontFamily: "RobotoSlab", }} subtitleStyle={{ fontSize: 13, fontFamily: "RobotoSlab", }} title={title} subtitle="Igor Belem" />
            <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        </Appbar.Header>
    );
};

export default Header;