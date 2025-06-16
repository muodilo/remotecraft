import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <>
        <div className=' rounded-lg flex items-center bg-primaryColor'>
            <CiSearch className='text-2xl mx-2'/>
          <input
            type="text"
            placeholder="Search"
            className="  py-2 rounded-lg outline-0"
          />
        </div>
    </>
  )
}

export default SearchBar