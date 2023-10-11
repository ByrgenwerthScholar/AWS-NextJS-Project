import './globals.css'
import Navbar from './components/Nav Bar/Nav'
import { AuthProvider } from './hooks/clientAuth'
import ConfigureAmplifyClientSide from './lib/ConfigureAmplifyClientSide';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    </head>
      <body className='font-poppins'>
        <ConfigureAmplifyClientSide />
        <AuthProvider>
         <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
