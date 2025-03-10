import API from "@/utils/axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./user-context";
import { handleSuccess } from "@/utils/handller";

// Define user data type
interface User {
    _id: string;
    username: string;
    email: string;
}

const ACCESS_TOKEN_KEY = "access_token";

// Provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // Add token to localStorage and API headers
    const addToken = (newToken: string) => {
        if (!newToken) return;
        localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
        setToken(newToken);
        API.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
    };

    // Remove token from localStorage and API headers
    const removeToken = () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        setToken(null);
        delete API.defaults.headers.common["Authorization"];
    };

    // Fetch user data on mount if token exists
    useEffect(() => {
        const fetchUser = async () => {

            if (user) return;


            const storedToken = localStorage.getItem(ACCESS_TOKEN_KEY);

            if (!storedToken) {
                setIsLoading(false);
                return;
            }

            setToken(storedToken);
            API.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

            try {
                const response = await API.get("/auth/me");
                setUser(response.data.user);
            } catch (error: any) {
                console.error("Failed to fetch user:", error.response?.data || error);
                if (error.response?.status === 401) {
                    removeToken();
                    handleSuccess("Logout successfully")
                    setUser(null);
                }
            } finally {
                setIsLoading(false);
            }
        };

        if (!user) {
            fetchUser();
        }
    }, [user]);

    // Logout function
    const logout = async () => {
        try {
            removeToken();
            handleSuccess("Logout successfully")
            setUser(null);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, token, isLoading, logout, addToken, removeToken }
        }>
            {children}
        </UserContext.Provider>
    );
};
