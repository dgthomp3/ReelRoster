import { useEffect, useState } from "react";

export default function AddFavoriteButton({ movieId }) {
    const [isFavorited, setIsFavorited] = useState(false);

    const fetchFavorites = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`,
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/favorite/movies`,
          options
        );
        const data = await response.json();

        if (data.results) {
          const isAlreadyFavorited = data.results.some(
            (movie) => movie.id === movieId
          );
          setIsFavorited(isAlreadyFavorited);
        }
      } catch (error) {
        console.error("Error checking favorites:", error);
      }
    };

    useEffect(() => {
      fetchFavorites();
    }, []);

    const handleFavoriteToggle = async () => {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movieId,
          favorite: !isFavorited,
        }),
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/favorite`,
          options
        );
        const data = await response.json();

        if (data.success) {
          setIsFavorited(!isFavorited);
        } else {
          console.error("Failed to update favorites:", data.status_message);
        }
      } catch (error) {
        console.error("Error adding to favorites:", error);
      }
    };

    return (
      <button
        className={`favorite-btn ${isFavorited ? "added" : ""}`}
        onClick={handleFavoriteToggle}
      >
        {isFavorited ? (
          <img src="/star.png" alt="Remove from Favorites" />
        ) : (
          <img src="/outline_star.jpg" alt="Add to Favorites" />
        )}
      </button>
    );
}