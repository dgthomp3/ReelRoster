import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Auth from './AuthComponent'
import { NavbarProvider, useNavbar } from './NavbarContext';
import { useEffect, useState } from 'react';
import PopularComponent from './PopularComponent';
import TopRatedComponent from './TopRatedComponent';

function Navbar() {
    const { showNavbar, username } = useNavbar();
    const [avatar, setAvatar] = useState(null);

    if (!showNavbar) return null;

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`, 
            }
          };
          
        fetch('https://api.themoviedb.org/3/account/21845502', options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.avatar?.tmdb?.avatar_path) {
                    setAvatar(`https://image.tmdb.org/t/p/w200${data.avatar.tmdb.avatar_path}`);
                } else {
                    setAvatar("/default-avatar.png"); // Use a default avatar
                }
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/popular">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          {username && (
            <span className="username">
              {avatar && <img src={avatar} alt="User Avatar" className="avatar" />}
              {username}
            </span>
          )}
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
                      <Route path="/popular" element={<PopularComponent />} />
                      <Route path='/top-rated' element={<TopRatedComponent />} />
                  </Routes>
                </main>
            </Router>
        </NavbarProvider>
    )
};