import { useEffect, useState } from "react";
import Home from "./HomeComponent";
import { useNavbar } from "./NavbarContext";

export default function AuthComponent() {
    const [error, setError] = useState(null);
    const [showHomeComponent, setShowHomeComponent] = useState(false);

    const { setShowNavbar } = useNavbar();

    const handleEnterClick = () => {
        setShowHomeComponent(true);
        setShowNavbar(true);
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS}`
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

    if (showHomeComponent) {
        return <Home />
    };

    return (
        <div>
            {!error ? (
                <>
                    <h1>Welcome!</h1>
                    <h4>Token Accepted</h4>
                    <button onClick={handleEnterClick}>Enter</button>
                </> 
            ) : (
                <h1>Error: Unable to Authenticate</h1>
            )}
        </div>
    );
};