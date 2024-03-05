import React from 'react'
import { upperCaseTheFirstLetter } from '@/functions/upperCase'
import Image from 'next/image'
function Landing() {

  return (
    <div>
        <div className='w-3/4 mx-auto'>

          <h1 className="text-4xl font-bold w-2/3 mt-48  " >{upperCaseTheFirstLetter("upload Your Books And Start Reading Them With Us.  Invite Your friends And see there progress .")}</h1>
        </div>
        <Image src="https://images.unsplash.com/photo-1604582480408-e7401f3c18bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="books" width={500} height={500}/>

    </div>
  )
}

export default Landing