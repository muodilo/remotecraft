import Link from 'next/link';
import React from 'react'
import { RiRemoteControlFill } from "react-icons/ri";

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
        <RiRemoteControlFill/>
        <p className='font-bold'>RemoteCraft</p>
    </Link>
  )
}

export default Logo