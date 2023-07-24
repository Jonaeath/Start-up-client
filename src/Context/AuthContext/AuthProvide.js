import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvide = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setloading] = useState(null);

    const createUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setloading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setloading(false)
        })

        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvide;