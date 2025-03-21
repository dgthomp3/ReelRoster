# ReelRoster

## Project Overview

ReelRoster is a web application designed to help users discover and organize movies effortlessly. By leveraging the TMDb API, ReelRoster provides a seamless experience for browsing movie details and managing personal watchlists.

### Key Features

* **Detailed Movie Information** – View ratings, titles, and release dates.
* **Watchlist Management** – Save movies to revisit later.
* **Favorites Collection** – Build a personal list of favorite movies with an easy toggle.
* **Trending Movies** – Explore popular and top-rated films in real time.

### Tech Stack

* React + Vite
* React Router
* TMDb API

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

### Run Project
``` bash
npm run dev
```

---

## Use Cases

1. **Personal Watchlist Management** – Keep track of movies you plan to watch using the dynamic 'Add/Remove to Watchlist' button.
2. **Favorites Collection** – Curate a list of all-time favorites, quickly toggling between 'Add' and 'Remove' with color indicators.
3. **Movie Discovery** – Explore trending, popular, or top-rated films and dive into detailed movie information, including ratings.
4. **Session Persistence** – Return later and find your watchlist and favorites intact, ensuring data persistence for a smoother experience.

---

## Future Enhancements

* **Search Feature** - Enable searching directly on the application.
* **Movie Trailers** – Add an embedded trailer section.
* **Genre Filters** – Browse movies by genre with ease.
* **Integrated Friend's List** - Add capabilities for users to make accounts and maintain a friend's list.
* **Add Ratings** - Allo users to rate movies directly on the application.
* **Dark Mode Toggle** – A slick, user-friendly light/dark theme switch.