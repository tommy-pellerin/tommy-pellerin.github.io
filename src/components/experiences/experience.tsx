import ExpeCard from './expeCard'
import LogoCircle from '../logoCircle'
import { experiencesData } from '../../lib/placeholder-data'

function Experiences() {
  return (
    <div className='my-5 bg-foreground p-1'>
      <h1 className='text-background'>Experiences</h1>
      <div className='bg-background p-1 md:p-5'>
        
          {experiencesData.map((experience,index)=>{
            return(
              <div key={index} className='flex flex-col items-center md:flex-row'>
                <div className='flex-shrink-0'>
                  <LogoCircle logo={experience.companyLogo} />
                </div>
                <ExpeCard experience={experience}/>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default Experiences