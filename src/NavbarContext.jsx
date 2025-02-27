import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
};

export function useNavbar() {
    return useContext(NavbarContext);
};