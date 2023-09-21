import './globals.css'
import Navbar from './components/Nav'


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
          <Navbar />
          {children}
      </body>
    </html>
  )
}
