"use client"

import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

type User = {
  name : string,
  nickname: string,
  email: string,
  email_verified: boolean,
};


function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

    async function checkAuthenticationStatus(): Promise<void> {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (isMounted) {
          setIsAuthenticated(true);
          setUser(currentUser.attributes);
        }
      } catch (error) {
        if (isMounted) {
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    }

    checkAuthenticationStatus();

    return () => {
      isMounted = false; // Cleanup: Mark component as unmounted
    };
  }, []);

  return { isAuthenticated, user };
}

export default useAuth;
