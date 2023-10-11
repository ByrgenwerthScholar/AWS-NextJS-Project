"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';
import { useAuth } from '../../hooks/clientAuth';

const Logout = () => {
  const router = useRouter();
  const auth = useAuth();


  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      await signOut();
      await auth?.logout();
      console.log('user was signed out');
      router.refresh();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }

  return (
    <div className="relative">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleLogout(event)}
        className="px-4 py-2 bg-transparent border-white border-2 text-white rounded"
      >
        Logout
      </button>
      
      </div>
  );
};

export default Logout;
