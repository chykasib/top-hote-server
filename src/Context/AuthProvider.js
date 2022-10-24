import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true)
    const name = { displayName: 'Rock' }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const verifiedEmail = () => {
    //     setLoading(true)
    //     return sendEmailVerification(auth.currentUser)
    // }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const resetPassword = () => {
        setLoading(true)
        return sendPasswordResetEmail(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            return setUser(currentUser)
            // if (currentUser === null || currentUser.emailVerified) {

            // }
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        name,
        loading,
        setLoading,
        githubSignIn,
        user,
        googleSingIn,
        resetPassword,
        logOut,
        createUser,
        logIn,


    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;