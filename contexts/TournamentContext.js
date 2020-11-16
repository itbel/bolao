import React, { useContext, useState } from "react";
const TournamentContext = React.createContext();

export const useTournamentContext = () => {
    return useContext(TournamentContext);
}

export const TournamentProvider = (props) => {
    const [selectedTournament, setSelectedTournament] = useState({
        tournament_id: "",
    })
    const setTournament = (id) => {
        setSelectedTournament({ tournament_id: id })
    }

    return (
        <TournamentContext.Provider value={{ selectedTournament, setTournament }}>
            {props.children}
        </TournamentContext.Provider >
    )
}