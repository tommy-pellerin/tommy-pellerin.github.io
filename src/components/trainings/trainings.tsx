import React from 'react'
import ExpeCard from '../experiences/expeCard'
import LogoCircle from '../logoCircle'
import { trainingsData } from '@/app/lib/placeholder-data'

function Trainings() {
  return (
    <div className='my-5 bg-foreground p-1'>
      <h1 className='text-background'>Trainings</h1>
      <div className='bg-background p-1 md:p-5'>

          {trainingsData.map((formation,index)=>{
            return(
              <div key={index} className='flex flex-col md:flex-row items-center'>
                <div className='flex-shrink-0'>
                  <LogoCircle logo={formation.schoolLogo}/>
                </div>
                <ExpeCard experience={formation}/>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default Trainings