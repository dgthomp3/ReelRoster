import { createContext, useContext, useEffect, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [showNavbar, setShowNavbar] = useState(() => {
        return localStorage.getItem("showNavbar") === "false"; // Load from localStorage
    });

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "";
    })

    useEffect(() => {
        localStorage.setItem("showNavbar", showNavbar); // Save state to localStorage
    }, [showNavbar]);

    useEffect(() => {
        localStorage.setItem("username", username);
    }, [username]);

    return (
        <NavbarContext.Provider value={{ showNavbar, setShowNavbar, username, setUsername }}>
            {children}
        </NavbarContext.Provider>
    );
};

export function useNavbar() {
    return useContext(NavbarContext);
};