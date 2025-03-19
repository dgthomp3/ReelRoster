import AddWatchlistButton from "./AddWatchlistButton";

export default function MovieComponent({ id, title, poster, rating }) {
    const displayRating = rating === "NR" || rating == null ? "N/A" : rating;

    return (
        <div className="movie-card">
            <img src={poster} alt={`${title} poster`} className="movie-poster" />
            <h2 className="movie-title">{title}</h2>
            <p className="movie-rating">Rating: {displayRating}</p>

            <AddWatchlistButton movieId={id} />
        </div>
    );
}