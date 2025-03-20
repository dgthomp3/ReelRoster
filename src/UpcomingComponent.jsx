import { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

export default function UpcomingComponent() {
    const [ upcoming, setUpcoming ] = useState([]);
    const todayUTC = Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
    );

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const daysUntilRelease = (dateString) => {
        const today = new Date();
        const releaseDate = new Date(dateString);
        const differenceInTime = releaseDate - today;

        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        if (differenceInDays === 0) return "Releasing Today! 🎉";
        if (differenceInDays === 1) return "Releasing in 1 day!";
        return `Releasing in ${differenceInDays} days!`;
    };

    const toUTCDate = (dateString) => {
        const date = new Date(dateString);
        return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    };

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`
            }
        };

        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(res => res.json())
            .then(data => {
                const movieList = data.results
                    .filter(movie => toUTCDate(movie.release_date) >= todayUTC)
                    .slice(0, 5)
                    .map((movie) => ({
                        id: movie.id,
                        title: movie.title,
                        poster: movie.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : '/placeholder-movieimage.png',
                        release: movie.release_date
                    }));

                setUpcoming(movieList);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Some Upcoming Movies!</h2>
            <div className="movie-container">
                {upcoming.map((movie) => (
                    <div key={movie.id} className="movie-wrapper">
                        <div className="movie-info">
                            <h4 className="release-date">
                                {formatDate(movie.release)}
                            </h4>
                            <span className="release-countdown">{daysUntilRelease(movie.release)}</span>
                        </div>
    
                        <MovieComponent
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster}
                            rating={'N/A'}
                        />
                    </div>
                ))}
            </div>
        </div>
    );ß
};