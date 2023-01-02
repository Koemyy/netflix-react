import {createContext, useContext, useEffect, useState} from "react";
import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore'
const AuthContext = createContext(0)

interface AuthComponent {
    children: any,
}

export function AuthContextProvider({children}: AuthComponent){
    const [user, setUser] = useState({});
    function signUp(email: string, password: string)  {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc (db, 'users', email), {
            savedShows: []
        })
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
