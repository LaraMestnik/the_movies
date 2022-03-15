import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const responseData = await response.json();
                console.log(responseData);
                setLoading(false);
                setData(responseData);
                setError(null);
            } catch (error) {
                setLoading(false);
                setError(error.message);
                console.log(error);
                console.log('error');
            }

        }
        getData();
    }, [url]);


    return { data, loading, error };
}
