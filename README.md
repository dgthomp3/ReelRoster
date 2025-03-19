# ReelRoster

## Project Overview

ReelRoster is a web application designed to help users discover and organize movies effortlessly. By leveraging the TMDb API, ReelRoster provides a seamless experience for browsing movie details, searching for films, and managing personal watchlists.

### Key Features

* **Search for Movies** – Find movies by title, genre, or keyword.
* **Detailed Movie Information** – View ratings, overviews, and trailers.
* **Watchlist Management** – Save movies to revisit later.
* **Favorites Collection** – Build a personal list of favorite movies with an easy toggle.
* **Trending Movies** – Explore popular and top-rated films in real time.

### Tech Stack

* React + Vite
* React Router
* TMDb API
* TailwindCSS (optional for styling improvements)

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/yourusername/ReelRoster.git
cd ReelRoster
```

### Install Dependencies
```bash
npm install
```

### Generate TMDb API Key and API Read Access Token

1. Go to [The Movie Database (TMDb)](https://www.themoviedb.org)
2. Create an account
3. Submit a request for an API Key

### Create a `.env` File in the Project Root
```env
VITE_TMDB_API_KEY=<YOUR_API_KEY>
VITE_TMDB_READ_ACCESS=<YOUR_READ_ACCESS_TOKEN>
VITE_ACCT_ID=<YOUR_ACCOUNT_ID>
```

---

## Use Cases

1. **Personal Watchlist Management** – Keep track of movies you plan to watch using the dynamic 'Add/Remove to Watchlist' button.
2. **Favorites Collection** – Curate a list of all-time favorites, quickly toggling between 'Add' and 'Remove' with color indicators.
3. **Movie Discovery** – Explore trending, popular, or top-rated films and dive into detailed movie information, including ratings and synopses.
4. **Quick Movie Comparisons** – Easily compare movies on your watchlist by toggling between them to check key details like genre, runtime, and rating.
5. **Session Persistence** – Return later and find your watchlist and favorites intact, ensuring data persistence for a smoother experience.

---

## Future Enhancements

* **Movie Trailers** – Add an embedded trailer section.
* **Genre Filters** – Browse movies by genre with ease.
* **User Reviews** – Allow users to leave and view comments.
* **Dark Mode Toggle** – A slick, user-friendly light/dark theme switch.