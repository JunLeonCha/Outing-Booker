import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ReactNode } from 'react';
import { SessionData } from '../interfaces/SessionData';

export const AuthContext = createContext<any>(null);

interface ProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const sessionData = sessionStorage.getItem('session');
    if (sessionData) {
      setSession(JSON.parse(sessionData));
    } else {
      return
    }
  }, []);

  console.log(session)

  const handleLogin = async (values: object) => {
    const res = await axios.post('/user/signIn', values);
    const data = res.data
    setSession(data);
    sessionStorage.setItem('session', JSON.stringify(data));
    console.log(session)
  };

  const handleLogout = async () => {
    setSession({});
    sessionStorage.removeItem('session');
    await axios.post('/user/signOut')
  };

  return (
    <AuthContext.Provider value={{ session, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
