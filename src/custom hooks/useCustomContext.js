import { useContext } from 'react';


export function useCustomContext(customContext) {
    const context = useContext(customContext);

    return context;
}