

export default function AddFavoriteButton() {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`
        }
      };
      
      fetch(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_ACCT_ID}/favorite`, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
};