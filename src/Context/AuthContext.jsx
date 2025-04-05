

import React, {createContext, useState} from 'react';
import { useUserState } from '../Hooks/useUserState';

//1. crear un nuevo contexto
export const AuthContext = createContext ();

//2 . crear un provider para compartir el estado
export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const { login } = useUserState ();


   const logout = () => {
      setUser(null);
  }

   return (
    <AuthContext.Provider value={{user, setUser, login, logout}}> 
       {children}
    </AuthContext.Provider>
   );
}
