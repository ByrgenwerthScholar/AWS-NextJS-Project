"use client";
import React from 'react';// Fixed the router import path
import { useAuth } from '../../hooks/clientAuth';

const UserProfileInfo = () => {
  const auth = useAuth();

  const user  = auth?.user;

  return (
    <button 
      onClick={() => {
        // Future functionality can go here when the button is clicked
        console.log('User button clicked!');
      }}
      className="flex items-center space-x-2 text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
    >
      {/* Circular profile picture */}
      <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
      
      {/* User's name */}
      {user?.username}
    </button>

  );
};

export default UserProfileInfo;
