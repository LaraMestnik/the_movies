import React, { createContext, useState } from 'react';
import { auth } from '../firebase';


export const GlobalContext = createContext();

export default function GlobalStateProvider({ children }) {
  const [user, setUser] = useState('');

  auth.onAuthStateChanged(user => {
    user && setUser(user);
  });

  return (
    <GlobalContext.Provider value={user}>
      {children}
    </GlobalContext.Provider>
  )

}
