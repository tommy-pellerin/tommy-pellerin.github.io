import React from 'react'
import { skillsData } from "../../lib/placeholder-data"
import Image from 'next/image'

function Skills() {
  const sortedSkillsData = skillsData.sort((a, b) => a.application.localeCompare(b.application));

  return (
    <div className='my-5 bg-foreground p-1'>
      <h1 className='text-background'>Skills</h1>
      <div className='grid grid-cols-3 gap-4 bg-background md:flex md:flex-wrap md:justify-evenly'>
        {
          sortedSkillsData.map((skill,index) => {
            return (
              <div key={index} className='justify-self-center bg-foreground rounded-full m-3 p-2 w-20 h-20 overflow-hidden'>
                <div className='flex justify-center items-center rounded-full w-full h-full bg-primaryMedium'>
                  <div className='relative w-14 h-14'>
                    <Image 
                      src={skill.image} 
                      fill
                      className='object-contain'
                      alt={skill.technology}
                    />
                  </div>
                </div>
              </div>              
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills