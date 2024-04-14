
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    

    const [user, setUser] = useState(null);
    console.log(user);
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create user sign in
    const createUserSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user sign out 
    const logOut = () => {
        return signOut(auth);
    }
    // social media login
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }
     // github login
     const githubLogin = () => {
        return signInWithPopup(auth,githubProvider)
    }
    // use observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        createUser,
        createUserSignIn,
        logOut,
        googleLogin,
        githubLogin,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;