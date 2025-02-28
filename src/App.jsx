import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Auth from './AuthComponent'
import { NavbarProvider, useNavbar } from './NavbarContext';
import { useEffect, useState } from 'react';

function Navbar() {
    const { showNavbar } = useNavbar();

    if (!showNavbar) return null;

    return (
        <nav className='navbar'>
          <Link to="/">Home</Link>
        </nav>
    );
};

export default function App() {
    return (
        <NavbarProvider>
            <Router>
                <header>
                  <Navbar />
                </header>

                <main>
                  <Routes>
                      <Route path="/" element={<Auth />} />
                  </Routes>
                </main>
            </Router>
        </NavbarProvider>
    )
};