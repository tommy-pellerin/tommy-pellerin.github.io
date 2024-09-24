import { skillsData } from "../../lib/placeholder-data"

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
                  <div className='relative w-14 h-14 group'>
                    <img 
                      src={skill.image}
                      className='object-contain w-full h-full group-hover:opacity-30'
                      alt={skill.technology}
                    />
                    <p className="absolute inset-0 flex justify-center items-center text-center text-primary text-sm opacity-0 pointer-events-none group-hover:opacity-100 hover:pointer-events-auto transition-opacity duration-300">{skill.technology}</p>                  </div>
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