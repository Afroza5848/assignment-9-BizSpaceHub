
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user);
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create user sign in
    const createUserSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // use profile update
    const createUserUpdateProfile = (name,image) => {
        setLoading(false)
        setUser({
            ...user,
            displayName:name,
            photoURL:image,
           })
      return  updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image
             
        })
    }
    
    // user sign out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    // social media login
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    githubProvider.addScope("read:user");
    githubProvider.addScope("user:email");

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    // use observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
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
        createUserUpdateProfile,
        user,
        loading
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