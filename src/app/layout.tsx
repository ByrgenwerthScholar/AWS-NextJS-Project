"use client";
import './globals.css'
import Navbar from './components/Nav'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  Amplify.configure(awsconfig);
  Auth.configure(awsconfig);
  return (
    <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
    </head>
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
