import React, { useState, useEffect, useContext } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }


    function reSetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const usubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return usubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        reSetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


