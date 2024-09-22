'use client'
import React from 'react'
import ProjectCard from './projectCard'
import { projectsData } from '@/app/lib/placeholder-data'
import { useState } from 'react';

function Projects() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(1);
  
  const handleCardState = (index: number): void =>{
    setOpenCardIndex(index);
  };

  return (
    <div className='my-5 bg-foreground p-1'>
      <h1 className='text-background'>Projects</h1>
      <div className='bg-background p-2'>

        {projectsData.map((project, index) => (
            openCardIndex === index ? (
              //opened card
              <ProjectCard 
                key={index}
                project={project}
              />
            ) : (
              //closed card
              <div 
                key={index} 
                onClick={() => handleCardState(index)} 
                className='rounded-xl shadow-xl p-2 text-center bg-primaryMedium m-1 hover:bg-secondary hover:cursor-pointer'
              >
                <h2>{project.title}</h2>
              </div>
            )
        ))}

      </div>
    </div>
  )
}

export default Projects