# ReelRoster

## Project Overview

ReelRoster is a web application designed to help users discover and organize movies effortlessly. By leveraging the TMDb API, ReelRoster provides a seamless experience for browsing movie details, searching for films, and managing personal watchlists.

### Key Features

* Search for Movies – Find movies by title, genre, or keyword.
* Detailed Movie Information – View ratings, overviews, and trailers.
* Watchlist Management – Save movies to revisit later.

### Tech Stack

* React + Vite
* React Router
* TMDb API

### Getting Started

#### Clone Repository
``` bash
git clone https://github.com/yourusername/ReelRoster.git
cd ReelRoster
```

#### Install Dependencies
``` bash
npm install
```

#### Generate TMDb API Key and API Read Access Token

* Go to https://www.themoviedb.org 
* Create an account
* Submit a request for an API Key

#### Create .env File in Project
```
TMBD_API_KEY=<YOUR_API_KEY>
TMBD_READ_ACCESS=<YOUR_READ_ACCESS_TOKEN>
```