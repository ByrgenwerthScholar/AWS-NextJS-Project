"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import {  listenToAuthSignInEvent } from '../../lib/listenToAuthSignInEvent';

import { signUp } from 'aws-amplify/auth';


export default function SignUp() {

  const [FormData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    confirmationCode: '',
  });

  const router = useRouter();

  const [signedUp, setSignedUp] = useState<string>('invalid'); 
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,256}$/;



  const handleSignUp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUp({
        username: FormData.name, 
        password: FormData.password,
        });

//     await listenToAuthSignInEvent(setConfirmed);
      setSignedUp('valid');
      router.push('/dashboard');
      
    } catch (error) {
      setSignedUp('error');
      console.log('error signing up:', error);
    }
  };

  const validateEmail = (value:string) => value.match(emailPattern);
  const validatePassword = (value:string) => value.match(passwordPattern);

  const emailValidation = React.useMemo(() => {
    if (FormData.email === "") return undefined;

    return validateEmail(FormData.email) ? "valid" : "invalid";
  }, [FormData.email]);

  const passwordValidation = React.useMemo(() => {
    if (FormData.password === "") return undefined;

    return validatePassword(FormData.password) ? "valid" : "invalid";
  }, [FormData.password]);
  

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  if (!confirmed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-text">
        <div className="p-8 bg-hippie_pink rounded shadow-sm w-96 flex flex-col gap-4">
          <h1 className="text-2xl text-white font-semibold mb-4">Sign Up as a Student!</h1>
          <form onSubmit={async (e) => {
            console.log(FormData);
            await handleSignUp(e);
          }
            }>
            <div className="flex w-full flex-col md:flex-nowrap mb-6 gap-1">
              <label htmlFor="name" className="text-xs text-white block mb-1">
                Username
              </label>
              <input
                id="name"
                placeholder="Draco Malfoy"
                className="w-full text-sm text-white bg-transparent border-b border-t-0 border-l-0 border-r-0 border-white placeholder-white py-1 focus:outline-none focus:border-apricot"
                value={FormData.name}
                onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
                required/>
            </div>
            <div className="flex w-full flex-col md:flex-nowrap mb-6 gap-1">
              <label htmlFor="email" className="text-xs text-white block mb-1">
                Email
              </label>
              <div className='flex border-b border-t-0 border-l-0 border-r-0'>
                <input
                  id="email"
                  placeholder='potterstinks@gmail.com'
                  className="w-full text-sm text-white bg-transparent border-white placeholder-white py-1 focus:outline-none focus:border-apricot"
                  onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
                  value={FormData.email}
                  required/>
                {(emailValidation === undefined) ? null : (emailValidation === 'valid') ? 
                <svg 
                  className="w-6 h-6 text-green-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg> :
                <svg 
                  className="w-6 h-6 text-yellow-200"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2}
                      d="M6 6l12 12M6 18L18 6"/>
                </svg>}
              </div>
            </div>
            <div className="primary flex w-full flex-col md:flex-nowrap mb-6 gap-1">
              <label htmlFor="password" className="text-xs text-white block mb-1">
                Password
              </label>
              <div className='flex border-b border-t-0 border-l-0 border-r-0'>
                <input
                  id="password"
                  placeholder='BestWizard100!'
                  className="w-full text-sm text-white bg-transparent border-white placeholder-white py-1 focus:outline-none focus:border-apricot"
                  onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
                  value={FormData.password}
                  required
                  type="password"/>
              {(passwordValidation === undefined) ? null : (passwordValidation === 'valid') ? 
                <svg 
                  className="w-6 h-6 text-green-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg> :
                <svg 
                  className="w-6 h-6 text-yellow-200"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
                  <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2}
                      d="M6 6l12 12M6 18L18 6"/>
                </svg>}
              </div>
              {(passwordValidation === 'invalid') ?
                <span className='text-xs text-yellow-200'>Password must be at least 8 characters long, contain at least one number, one uppercase letter, and one special character.</span> : null}
            </div>
            <button className='align-centre text-white border rounded-lg p-2 hover:bg-white hover:text-hippie_pink' disabled={ !(emailValidation === "valid") && !(passwordValidation === "valid") } type="submit">
              { (signedUp === 'invalid') ? 'Sign Up' : (signedUp === 'valid') ? 
              ( <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                  Sign Up
                </span>
              </div> ) : 'Something went wrong!' }
            </button>
          </form>
        </div>
      </main>
    );
  };
};