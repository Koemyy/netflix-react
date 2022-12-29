import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(0)

interface AuthComponent {
    children: string,
}

export function AuthContextProvider({children}: AuthComponent){
    return (
        <Auth
    )
}
