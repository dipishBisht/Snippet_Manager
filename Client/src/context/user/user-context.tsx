import { createContext, useContext } from "react";

// Define user data type
interface User {
    _id: string;
    username: string;
    email: string;
}

// Define context state shape
interface UserContextType {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    logout: () => void;
    addToken: (token: string) => void;
    removeToken: () => void;
}

// Create context with default values
export const UserContext = createContext<UserContextType | null>(null);

// Custom hook to use UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
