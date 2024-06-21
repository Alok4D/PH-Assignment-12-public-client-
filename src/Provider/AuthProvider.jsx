

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const loginUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
        
    }


    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
          
    }

    const authInfo = {
        registerUser,
        loginUser,
        user,
        setUser,
        googleLogin,
        logOut,
        updateUserProfile
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log('Current User', currentUser);
            } else {
            setUser(null);
            }
          });
          return () => {
            unsubscribe();
          }
 
    }, [])
    
    return (
        <div>
           <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;