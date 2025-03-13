import React, { useEffect, useState } from "react";
import FavoritesComponent from "./FavoritesComponent";
import UpcomingComponent from "./UpcomingComponent";
import WatchlistComponent from "./WatchlistComponent";

export default function HomeComponent() {
    const [username, setUserName] = useState(null);
    
    // Pull User Data from API
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`, 
            }
          };
          
        fetch(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserName(data.username);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <h1>Home</h1>
            <UpcomingComponent />
            <WatchlistComponent />
            <FavoritesComponent />
        </>
    );
};