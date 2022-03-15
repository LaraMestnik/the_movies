import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthContext } from './useAuthContext';

export default function useLogin() {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    async function login(email, password) {
        setLoading(true);
        setError(null);

        try {
            const response = await auth.signInWithEmailAndPassword(email, password);

            if (!response) {
                setError('Could not log in!');
            }

            dispatch({ type: 'LOGIN', payload: response.user });

            if (!isCancelled) {
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            console.log(error.message);
            if (!isCancelled) {
                setError(error.message);
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { login, error, loading }
}
