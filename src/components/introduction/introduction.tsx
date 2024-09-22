import { DocumentTextIcon } from '@heroicons/react/24/outline';


function Introduction() {
  return (
    <div className='my-5 bg-foreground p-1'>
      <h1 className='text-background'>Introduction</h1>
      <div className='bg-background'>
        <div className='p-3'>
          <div className='w-32 h-32 float-start mr-5 rounded-full overflow-hidden'>
            <img 
              src="/tommy.jpg"
              className='object-cover w-full h-full'
              alt="my profile image"
            />
          </div>
          <p>
            Curious and passionate about learning, I am constantly seeking to improve my daily life as well as that of those around me, by embracing the knowledge shared worldwide. I started my career in mechanics, a field that captivated me with its potential for innovation and continuous learning. After several years of experience, I felt the need to go further. As the world evolves rapidly, with technology taking on an increasingly important role, I realized I was missing a key skill: coding.
          </p>
          <p>
            The emergence of tools like ChatGPT made me aware of the urgency of adopting these new technologies. For me, improving quality and efficiency, whether at work or in everyday life, requires mastering modern tools and understanding the mechanisms behind them. It is with this mindset that I am now learning to code, convinced that innovation and the mastery of new skills are essential to meeting the challenges of tomorrow.
          </p>
        </div>
        
        <div className='flex flex-wrap justify-center items-center gap-2'>
          <h3>Download my resume</h3>
          <div className='md:hidden'>👇👇</div>
          <div className='hidden md:block'>👉👉</div>
          <a href="/developper_resume/CV_Tommy_Pellerin.pdf" download className='button_with_border flex flex-row items-center my-1'>
            Developer resume
            <DocumentTextIcon aria-hidden="true" className="h-6 w-6"/>
          </a>
          <a href="/mechanical_resume/CV_Tommy_Pellerin.pdf" download className='button_with_border flex flex-row items-center my-1'>
            Mechanical engineer resume
            <DocumentTextIcon aria-hidden="true" className="h-6 w-6"/>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Introduction