"use client"
import { createContext, useContext, useState } from 'react';
import { AuthContextType, AuthProviderProps } from '../types/authTypes';
import { StudentData } from '../types/studentTypes';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect } from 'react';


const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<StudentData | null>(null); // Use an effect to fetch initial state

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await getCurrentUser();
        const username = userData.username;
        setUser({username}); 
      } catch (error) {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  const login = async (userData: StudentData) => {
    setUser(userData);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
