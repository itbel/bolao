import React, { useContext, useState } from "react";
import { Auth } from "@aws-amplify/auth"

const UserContext = React.createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = (props) => {
    const [userState, setUserState] = useState({
        isLoggedIn: false,
        user: "",
        name: ""
    })
    const loginUser = (user) => {
        setUserState({ 
            user: user, 
            isLoggedIn: true, 
            name: "Hardcoded Name" })
    }

    const logoutUser = async () => {
        setUserState({
            user:"",
            name:"",
            isLoggedIn:false
        })
       console.log("logout")
    }

    return (
        <UserContext.Provider value={{ userState, loginUser, logoutUser }}>
            {props.children}
        </UserContext.Provider >
    )
}