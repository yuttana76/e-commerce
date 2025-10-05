import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
        <Search />
        <input id ='search' type="text" placeholder='Search...' className='text-sm outline-0' />
    </div>
  )
}

export default SearchBar