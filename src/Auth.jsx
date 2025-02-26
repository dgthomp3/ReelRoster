import { useEffect, useState } from "react";

export default function Auth() {
    const [error, setError] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMBD_READ_ACCESS}`
            }
        };
      
        fetch('https://api.themoviedb.org/3/authentication', options)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.error('Error fetching authentication: ', err);
                setError(err.message);
            });
    }, []);

    return (
        <div>
            {!error ? (
                <>
                    <h1>Welcome!</h1>
                    <h4>Token Accepted</h4>
                </> 
            ) : (
                <h1>Error: Unable to Authenticate</h1>
            )}
        </div>
    );
};