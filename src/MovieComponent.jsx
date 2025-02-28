import React from "react";

export default function MovieComponent({ title, poster, rating }) {
    return (
        <div className="movie-card">
            <img src={poster} alt={title} className="movie-poster" />
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
        </div>
    )    
};