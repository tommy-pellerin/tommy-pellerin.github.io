interface Experience {
  title: string;
  company?: string;
  school?: string;
  localisation: string;
  start_date: string;
  end_date: string;
  content: string;
}

interface ExpeCardProps {
  experience: Experience;
}

function ExpeCard({experience}: ExpeCardProps) {
  const contents = experience.content.includes("-") ? experience.content.split("-").slice(1) : [experience.content]; //ignore the first element with slice
  return (
    <div className='bg-primaryMedium p-1 w-full rounded-lg my-2'>
      <h3 className='text-background'>{experience.title}</h3>
      <p className='text-background'>
        {experience.company ? experience.company : experience.school} - {experience.localisation}
      </p>
      <p className='text-sm text-background'>{experience.start_date} - {experience.end_date}</p>
      <div className='bg-background'>
        <ul className='list-disc pl-10'>
        {contents.map((content,index) => {
          return(
            <li key={index}>
              {content}
            </li>
          )
        })}
        </ul>
      </div>      
    </div>
  )
}

export default ExpeCard