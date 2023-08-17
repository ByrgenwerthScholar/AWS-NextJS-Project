import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <h1><Link href="/">Arena</Link></h1>
      <Search />
    </nav>
  )
}
