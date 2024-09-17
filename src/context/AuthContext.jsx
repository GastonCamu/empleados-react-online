import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({ username: '' });

    const login = (username) => {
        setIsAuthenticated(true);
        setUser({ username });
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser({ username: '' });
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};