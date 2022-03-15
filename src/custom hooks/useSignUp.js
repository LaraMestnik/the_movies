import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthContext } from './useAuthContext';

export default function useSignUp() {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();


    async function signup(name, email, password) {
        setError(null);
        setLoading(true);

        /*    if (password !== confirmPassword) {
               setError("Passwords do not match! Try again");
           } */

        try {

            const response = await auth.createUserWithEmailAndPassword(email, password);

            console.log(response.user);

            if (!response) {
                throw new Error("Could not signup the user");
            }

            //add name to user
            await response.user.updateProfile({ displayName: name });

            dispatch({ type: "LOGIN", payload: response.user });

            if (!isCancelled) {
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            if (!isCancelled) {
                setError(error.message);
                setLoading(false);
            }

        }

    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { signup, error, loading };


}



