import React, { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

export default function HomeComponent() {
    const [username, setUserName] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [title, setTitle] = useState("");
    const [posterPath, setPosterPath] = useState("");
    const [rating, setRating] = useState(0);

    const id = 661539;

    const poster = `https://image.tmdb.org/t/p/w500${posterPath}`;

    // Pull User Data from API
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
                setUserName(data.username);
            })
            .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${id}language=en-US`, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTitle(data.title);
                setPosterPath(data.poster_path);
                setRating(data.vote_average);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <h1>Home</h1>
            <h4>Hello, {username}!</h4>
            <MovieComponent
                title={title}
                poster={poster}
                rating={rating}
            />
        </>
    );
};