import React from 'react'
import Image from 'next/image'
import styles from "./style.module.scss"
import { Button } from '@/components/ui/button'

const NavBar = () => {
  return (
    <nav className="flex justify-evenly text-white h-16 px-4">
      <div className="flex justify-evenly">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <p className="ml-4">Yikes</p>
      </div>
      <div className="flex justify-between text-slate-300 w-1/3 pt-4   ">
        <p className='hover:text-black'>Who we're</p>
        <p className='hover:text-black'>Contact Us</p>
        <p className='hover:text-black'>Download App</p>
      </div>
      <div className="flex justify-evenly w-1/6	pt-3">
        <Button className="rounded-full bg-transparent border  border-white hover:bg-white hover:text-emerald-500 text-black px-4 py-2">
          Log in
        </Button>
        <Button className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2">
          Get Started
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
