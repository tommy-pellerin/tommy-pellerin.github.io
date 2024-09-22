import { XMarkIcon } from '@heroicons/react/24/outline';
interface ImageModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

function ImageModal({ image, alt, onClose }: ImageModalProps) {

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='relative bg-background p-4 rounded max-w-full max-h-full'>
        <button onClick={onClose} className='absolute top-0 right-0 w-8 h-8'>
          <XMarkIcon/>
        </button>
        <div>
          <img
            src={image}
            className='object-contain'
            alt={alt}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageModal