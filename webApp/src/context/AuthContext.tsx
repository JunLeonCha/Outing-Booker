import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ReactNode } from 'react';

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

  const handleLogin = async (values: object) => {
    const res = await axios.post('/user/signIn', values);
    const data = res.data
    console.log(data);
    setSession(data);
    sessionStorage.setItem('session', JSON.stringify(data));
    window.location.assign("/")
  };

  const handleLogout = async () => {
    await axios.post('/user/signOut').then(() => {
      setTimeout(() => {
        window.location.assign("/");
        sessionStorage.removeItem('session');
        sessionStorage.clear();
      }, 300);
    })
  };

  return (
    <AuthContext.Provider value={{ session, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
