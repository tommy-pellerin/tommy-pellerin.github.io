import React from 'react'
import Image from 'next/image'
interface LogoCircleProps {
  logo: string
}

function LogoCircle({ logo }: LogoCircleProps) {
  return (
    <div className='bg-primaryMedium rounded-full p-2 m-2 w-20 h-20'>
      <div className='bg-foreground flex justify-center items-center rounded-full w-full h-full'>
        {
          logo ?
          <div className='relative w-14 h-14'>
            <Image 
              src={logo} 
              fill
              sizes="56px" // Set sizes to match the container width which is w-14
              className='object-contain'
              alt="company logo"
            />
          </div>
          :
          <p>No logo</p>
        }
      </div>
    </div>
  )
}

export default LogoCircle