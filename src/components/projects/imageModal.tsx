import { XMarkIcon } from '@heroicons/react/24/outline';
interface ImageModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

function ImageModal({ image, alt, onClose }: ImageModalProps) {

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='relative bg-primaryLight rounded max-w-screen h-5/6'>
        <button onClick={onClose} className='absolute top-1 right-1 w-8 h-8'>
          <XMarkIcon />
        </button>
        <div className='w-full h-full'>
          <img
            src={image}
            className='object-contain w-full h-full'
            alt={alt}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageModal