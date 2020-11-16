import React, { useContext, useState } from "react";
const UserContext = React.createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = (props) => {
    const [userState, setUserState] = useState({
        isLoggedIn: false,
        user: "",
    })
    const loginUser = (user) => {
        setUserState({ user: user, isLoggedIn: true })
    }

    const logoutUser = () => {
        setUserState({ user: "", isLoggedIn: false })
    }

    return (
        <UserContext.Provider value={{ userState, loginUser, logoutUser }}>
            {props.children}
        </UserContext.Provider >
    )
}