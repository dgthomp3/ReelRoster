import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Auth from './AuthComponent'
import { NavbarProvider, useNavbar } from './NavbarContext';
import { useEffect, useState } from 'react';

function Navbar() {
    const { showNavbar } = useNavbar();

    if (!showNavbar) return null;

    return (
        <nav>
          <Link to="/">Home</Link>
        </nav>
    );
};

export default function App() {
    return (
        <NavbarProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Auth />} />
                </Routes>
            </Router>
        </NavbarProvider>
    )
};