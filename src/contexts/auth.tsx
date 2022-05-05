import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import apiClient from "../services/api-service";
import { User } from "../types/routes";

type AuthProps = {
    user: User;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthProps>({
    user: { email: '', name: '', token: '' },
    setUser: () => { },
})

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<User>({ email: "", name: "", token: "" });

    useEffect(() => {
        if (user?.token) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user?.token}`
        }
        else {
            apiClient.defaults.headers.common['Authorization'] = '';
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>)
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}