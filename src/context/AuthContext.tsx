import {createContext, useContext, useEffect, useState} from "react";
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';

const AuthContext = createContext(0)

interface AuthComponent {
    children: any,
}

export function AuthContextProvider({children}: AuthComponent){
    const [user, setUser] = useState({});
    function signUp(email: string, password: string)  {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn (email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut () {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // @ts-ignore
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    })

    return (
        // @ts-ignore
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}
