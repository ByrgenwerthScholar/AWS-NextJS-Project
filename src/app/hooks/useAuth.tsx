import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

type User = {
  name : string,
  nickname: string,
  email: string,
  email_verified: boolean,
};

function useAuth() {
  Auth.configure(awsconfig);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    async function checkAuthenticationStatus(): Promise<void> {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
        setUser(currentUser.attributes);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
    }

    checkAuthenticationStatus();
  }, []);

  return { isAuthenticated, user };
}

export default useAuth;