'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()


  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }
  
  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="w-50 md:w-1/2 p-2 border border-gray-300 rounded-md" />
      <button type='submit' className="w-1/4 p-2 border border-gray-300 rounded-md">Search</button>
    </form>
  )
}
