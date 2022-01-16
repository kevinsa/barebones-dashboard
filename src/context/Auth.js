import React, { useEffect, useState } from 'react';
import StorageService from '../services/Storage';

const authContext = React.createContext();

function useAuth() {
    const storageService = new StorageService();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = storageService.getUser();
        if(loggedInUser) {
            setUser(loggedInUser);
            setLoggedIn(true);
        }
    }, []);

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        storageService.setUser(user);
    }

    const logout = () => {
        return new Promise((res, rej) => {
            setLoggedIn(false);
            storageService.removeUser();
            res();
        })
    }

    return {
        loggedIn,
        login,
        logout,
        user
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export default function AuthConsumer() {
    return React.useContext(authContext);
}