import { useState } from 'react'
import ImageModal from './imageModal';
interface Project {
  title: string;
  resume: string;
  start_date: string;
  end_date: string;
  images: string[];
  github: string;
  production: string | null;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className='rounded-xl shadow-xl p-2 text-center bg-primaryMedium'>
        <div className='flex flex-col md:flex-row justify-center gap-2 w-full h-full'>
          {project.images &&
            project.images.map((image,index)=>{
              return(
                <div key={index} className='w-auto h-56 bg-primaryLight rounded-lg' onClick={()=> openModal(image)}>
                  <img
                    src={image}
                    className='object-contain w-full h-full hover:cursor-pointer rounded-lg'
                    alt={project.title}
                  />
                </div>
              )
            })
          }
        </div>
        <h2>{project.title}</h2>
        <div className=''>
          <p>{project.resume}</p>
          <p className='text-sm'>{project.start_date} - {project.end_date}</p>
          <div className='my-3'>
            <a href={project.github} className='button_with_border'>Github</a>
            {
              project.production &&
              <a href={project.production} className='button_with_border'>Production</a>
            }
          </div>
          {/* <div className='flex justify-center'>
              <button className='button_with_border flex flex-row items-center my-1'>
                Details
              </button>
            </div> */}
        </div>
      </div>
      {isModalOpen && selectedImage && (
        <ImageModal image={selectedImage} alt={project.title} onClose={closeModal} />
      )}
    </>
  )
}

export default ProjectCard