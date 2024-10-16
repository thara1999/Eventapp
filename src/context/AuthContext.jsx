import React, { createContext, useContext, useState } from 'react';
import { getusers } from '../api/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        try {
            const response = await getusers()
            if (response.status === 200) {
                const users = response.data
                const foundUser = users.find(user => user.email === email && user.password === password)
                if (foundUser) {
                    setUser(foundUser)
                    return true;
                }
            }
        } catch (error) {
            console.log("Login error: ", error);
        }
        return false;
    };

    const logout = () => {
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
