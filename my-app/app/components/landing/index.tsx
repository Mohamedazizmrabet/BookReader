import React from 'react'
import { upperCaseTheFirstLetter } from '@/functions/upperCase'
import Image from 'next/image'
function Landing() {

  return (
    <div className="grid grid-cols-2 gap-10 items-center ml-32">  
  <div className="col-span-1 w-full">
    <h1 className="text-5xl font-bold w-full mt-9">
      {upperCaseTheFirstLetter(
        "Upload Your Books And Start Reading Them With Us. Invite Your friends And see their progress ."
      )}
    </h1>
    <h2 className='text-2xl mt-9' >The most appropriate book site to read books.</h2>
  </div>
  <div className='bg-[#f0c384] rounded-full	w-2/4 h-3/4  mr-16'>
  <Image
    loading="lazy"
    src="/photo-1604582480408-e7401f3c18bf-removebg-preview.png"
    alt="books"
    width={500}
    height={500}
  />

  </div>
</div>
  )
}

export default Landing