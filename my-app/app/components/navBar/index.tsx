import React from 'react'
import Image from 'next/image'
import styles from "./style.module.scss"
import { Button } from '@/components/ui/button' 
const NavBar = () => {
  return (
    <nav className='flex justify-evenly'>
        <div className='flex justify-evenly'>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
       <p>Yikes</p> 
        </div>
        <div className='flex justify-between'>
       <p>Who we're</p>
       <p>Contact Us</p>
       <p>Download App</p>
        </div>
<div>
<Button/>
<Button/>

</div>

    </nav>
  )
}

export default NavBar