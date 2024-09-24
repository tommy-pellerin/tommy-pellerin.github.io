import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

function DarkLight() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const changeTheme = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative inline-block w-11 h-5">
        <input 
          id="switch-component-on" 
          type="checkbox" 
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-background cursor-pointer transition-colors duration-300" 
          onChange={changeTheme} 
          checked={isDarkMode}
        />
        <label 
          htmlFor="switch-component-on" 
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-background cursor-pointer flex items-center justify-center"
        >
          {isDarkMode ? (
            <MoonIcon className="w-4 h-4 text-gray-800" />
          ) : (
            <SunIcon className="w-4 h-4 text-yellow-500" />
          )}
        </label>
      </div>
    </div>
  )
}

export default DarkLight