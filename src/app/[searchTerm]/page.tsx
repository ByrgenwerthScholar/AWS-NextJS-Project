import React from 'react'
import getUser from '../../../lib/getUser'

type Props = {
  params: {
    searchTerm: string
  }
}

export default function page({ params: { searchTerm }}: Props) {
  const user: Promise<searchResult> = getUser(searchTerm)
  return (
    <div>page</div> 
  )
}