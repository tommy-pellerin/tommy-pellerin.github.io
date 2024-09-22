import NavLinks from './nav-links';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 bg-foreground'>
      <div className="flex flex-row justify-between mx-5">
        <a className="w-12 h-12 mb-1" href="/">
          <img 
            src="/logo-colored.png"
            className='object-contain'
            alt="portfolio logo"
          />
        </a>

        {/* show only in small screen */}
        <button className="md:hidden" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          { isMenuOpen ?
            <XMarkIcon aria-hidden="true" className="h-6 w-6 text-background" />
            :
            <Bars3BottomRightIcon aria-hidden="true" className="h-6 w-6 text-background" />
          }
        </button>

        {/* others screen size */}
        <div className='hidden md:flex md:flex-row md:justify-around md:items-center'>
          <NavLinks/>
        </div>

      </div>

      {/* show only in small screen */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-foreground shadow-md block grow text-center md:hidden">
          <NavLinks />
        </div>
      )}

      
    </nav>
  );
}