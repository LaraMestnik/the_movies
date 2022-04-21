import { createContext, useReducer, useEffect } from 'react';
import { auth } from '../firebase';


export const AuthContext = createContext();

const initialState = {
  user: null,
  authIsReady: false
}

export function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state;
  }
}

console.log('user', initialState.user);

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub();
    })
  }, [])



  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )

}
