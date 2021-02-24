import { useState, useEffect } from 'react';

/**
 * This function will  retrieve data from an external API based on a URL 
 * passed into it as argument.
 * @param {string} apiUrl - This string will be the URL for the API you wish to get data from.
 * @return {state} - The data returned from the API.
 */

export const retrieveExternalData = (apiUrl) => {
    const [response, setResponse] = useState('');

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => setResponse(json))
            .catch((error) => console.error(error));
    }, []);

    return response;
}

