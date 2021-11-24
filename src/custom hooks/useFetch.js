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
                setLoading(false);
                setData(responseData);
                setError(null);
            } catch (error) {
                setLoading(false);
                setError(error.message);
                console.log(error.message);
            }

        }
        getData();
    }, [url]);

    async function getData() {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw Error('Could not get the data');
            }
            const responseData = await response.json();
            setLoading(false);
            setData(responseData);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }

    }


    return { data, loading, error, getData };
}
