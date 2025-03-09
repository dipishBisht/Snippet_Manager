import { LoadingSpinner } from "@/components/loading-spinner";
import { useUser } from "@/context/user/user-context";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function Guard({ children }: { children: React.ReactNode }) {
    const { token, isLoading } = useUser();
    const {pathname} = useLocation();

    const authPages = ["/login", "/signup", "/"];
    const protectedPages = ["/dashboard", "/profile", "/settings"]; // Add other protected pages

    if (isLoading) {
        return <LoadingSpinner size="lg" />
    }

    // Redirect authenticated users away from auth pages (login/signup) to dashboard
    if (token && authPages.includes(pathname)) {
        return <Navigate to="/dashboard" replace />;
    }

    // Redirect unauthenticated users from protected pages to home
    if (!token && protectedPages.includes(pathname)) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}
