import React from "react";
import { Appbar } from "react-native-paper";
import { useTournamentContext } from "../contexts/TournamentContext";
import { useUserContext } from "../contexts/UserContext"
const Header = ({ navigation, title }) => {
    const { userState } = useUserContext();
    const { selectedTournament } = useTournamentContext();
    return (
        <Appbar.Header style={{ backgroundColor: "#528C6E", height: 140, elevation: 0, shadowColor: "#528C6E", shadowRadius: 0, shadowOpacity: 1, shadowOffset: { width: 0, height: 0 } }}>
            {title !== "Welcome" ? <Appbar.BackAction onPress={() => { navigation.goBack() }} /> : null}
            <Appbar.Content noShadow={true} titleStyle={{ fontSize: 23, fontFamily: "RobotoSlab-Regular", }} subtitleStyle={{ fontSize: 13, fontFamily: "RobotoSlab-Regular", }} title={title} subtitle={userState.name} />
            {selectedTournament.tournament_id !== "" ? <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} /> : null}
        </Appbar.Header>
    );
};

export default Header;