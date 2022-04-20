import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useCustomContext } from './useCustomContext';
import { AuthContext } from '../context/AuthContext';

export function useLogout() {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useCustomContext(AuthContext);

    async function logout() {
        setError(null);
        setLoading(true);

        try {
            await auth.signOut();

            dispatch({ type: 'LOGOUT' });

            if (!isCancelled) {
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            console.log(error.message);
            if (!isCancelled) {
                setError(error.message)
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { logout, error, loading }
}