import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface User {
    email: string;
    name: string;
    token: string;
}

type AuthProps = {
    user?: User;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthProps>({
    user: { email: '', name: '', token: '' },
    setUser: () => { }
})

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {

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