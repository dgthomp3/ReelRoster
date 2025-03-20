import { useState, useEffect } from "react";

export default function AddWatchlistButton({ movieId }) {
    const [isAdded, setIsAdded] = useState(false);

    const checkWatchlist = async () => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`,
            },
        };

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/watchlist/movies?language=en-US&page=1`,
                options
            );
            const data = await response.json();

            // Check if the current movie is already in the watchlist
            const movieInWatchlist = data.results.some((movie) => movie.id === movieId);
            setIsAdded(movieInWatchlist);
        } catch (error) {
            console.error("Error checking watchlist:", error);
        }
    };

    useEffect(() => {
        checkWatchlist();
    }, []);

    const handleWatchlistToggle = async () => {
        const options = {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`,
            },
            body: JSON.stringify({
                media_type: "movie",
                media_id: movieId, // Replace this with your dynamic movie ID
                watchlist: !isAdded,
            }),
        };

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/watchlist`,
                options
            );
            const data = await response.json();

            if (data.success) {
                setIsAdded(!isAdded);
            } else {
                console.error("Failed to update watchlist:", data.status_message);
            }
        } catch (error) {
            console.error("Error adding to watchlist:", error);
        }
    };

    return (
        <button
            className={`watchlist-btn ${isAdded ? "added" : ""}`}
            onClick={handleWatchlistToggle}
        >
            {isAdded ? 
                <img src="/minus.png" alt="Remove from Watchlist" /> : 
                <img src="/plus.png" alt="Add to Watchlist" /> }
        </button>
    );
};