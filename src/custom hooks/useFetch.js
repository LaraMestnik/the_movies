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
                    throw Error('Could not get the data');
                }
                const data = await response.json();
                setLoading(false);
                data && setData(data);
            } catch (error) {
                setLoading(false);
                setError(error.message);
                console.log(error.message);
            }

        }
        getData();
    }, [url]);


    return { data, loading, error };
}
