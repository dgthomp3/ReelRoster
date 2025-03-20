import { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

export default function WatchlistComponent() {
    const [ watchlist, setWatchlist ] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`, options)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    const movieList = data.results
                        .slice(0, 5) 
                        .map((movie) => ({
                            id: movie.id,
                            title: movie.title,
                            poster: movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : '/placeholder-movieimage.png',
                            rating: movie.vote_average
                        }));

                    setWatchlist(movieList);
                }
            })
            .catch(err => console.error(err));
    });

    return (
        <div>
            <h2>Any changes to your Watchlist?</h2>
            <div className="movie-container">
                {watchlist.map((movie) => (
                    <MovieComponent 
                        key={movie.id}
                        id={movie.id} 
                        title={movie.title} 
                        poster={movie.poster} 
                        rating={movie.rating} 
                    />
                ))}
            </div>
        </div>
    );
};