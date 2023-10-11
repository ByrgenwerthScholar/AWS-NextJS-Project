"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/clientAuth';
import { signIn } from 'aws-amplify/auth';

const DropdownLogin = () => {
  const router = useRouter();
  const auth = useAuth();

 // const [confirmSignIn, setConfirmSignIn] = useState<boolean>(false); 
  const [showForm, setShowForm] = useState(false);
  const [FormData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = FormData.username;
    const password = FormData.password;
    try {
      await signIn({ username, password });
      await auth?.login({ username, FormData });
      window.location.href = '/dashboard';
    } catch (error) {
      console.log('Error signing in:', error);
    } 
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowForm(!showForm)}
        className="px-4 py-2 bg-transparent border-white border-2 text-white rounded"
      >
        Login
      </button>
      
      {showForm && (
        <div className="absolute top-full right-0 mt-2 w-96 p-5 bg-hippie_pink rounded shadow-lg text-white">
          <form onSubmit={async (e) => {
            await handleLogin(e);
          }}>
            <div className="flex w-full flex-col md:flex-nowrap mb-6 gap-1">
              <label htmlFor="email" className="text-xs text-white block mb-1">
                Username
              </label>
              <div className='flex border-b border-t-0 border-l-0 border-r-0'>
                <input
                  id="email"
                  className="w-full text-sm text-white bg-transparent border-white placeholder-white py-1 focus:outline-none focus:border-apricot"
                  onChange={(e) => setFormData({ ...FormData, username: e.target.value })}
                  value={FormData.username}
                  required/>
              </div>
            </div>
            <div className="primary flex w-full flex-col md:flex-nowrap mb-6 gap-1">
              <label htmlFor="password" className="text-xs text-white block mb-1">
                Password
              </label>
              <div className='flex border-b border-t-0 border-l-0 border-r-0'>
                  <input
                    id="password"
                    className="w-full text-sm text-white bg-transparent border-white placeholder-white py-1 focus:outline-none focus:border-apricot"
                    onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
                    value={FormData.password}
                    required
                    type="password"/>
                </div>
              </div>
            <div className="flex">
              <button type="submit" className="text-white border rounded-lg px-4 py-2 hover:bg-white hover:text-fern">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DropdownLogin;
