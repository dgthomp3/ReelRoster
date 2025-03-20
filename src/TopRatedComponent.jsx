import { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";


export default function TopRatedComponent() {
    const [topRatedList, setTopRatedList] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`,
            },
          };
          
          // Populate the popular list with necessary info
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                if (data.results) {
                    const movieList = data.results.map((movie) => ({
                        id: movie.id,
                        title: movie.title,
                        poster: movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : '/placeholder-movieimage.png',
                        rating: movie.vote_average
                    }));

                    setTopRatedList(movieList);
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Top-Rated Movies</h1>
            <div className="movie-container">
                {topRatedList.map((movie) => (
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
    )
};

