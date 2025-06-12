import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='px-16 py-3 border-b border-slate-300'>
     <div>Logo</div>

     <ul>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/'}>Jobs</Link>
        </li>
        <li>
            <Link href={'/'}>Post aJob</Link>
        </li>
        <li>
            <Link href={'/'}>Companies</Link>
        </li>
     </ul>

    </nav>
  )
}

export default Navbar