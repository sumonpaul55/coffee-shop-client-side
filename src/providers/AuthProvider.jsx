import React, { createContext, useState } from 'react';
import PropTypes from "prop-types"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.cofig';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }






    const userInfo = {
        user,
        createUser,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;