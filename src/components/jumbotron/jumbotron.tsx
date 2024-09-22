import React from 'react'

function Jumbotron() {
  return (
    <div className='md:grid grid-cols-3 gap-4'>
      <div className="col-span-2 md:order-2">Image</div>
      <div className="col-span-1 md:order-1">
        <h1>Hi, i’m Tommy</h1>
        <h2>Mechanical engineer and web developer.</h2>
        <p>         
          Initially I wanted to created 2 portfolio, one for web development and one for mechanical, but I am convinced that your present here means that you want to know more about me.
        </p>
        <div className='flex justify-center'>
          <a href="#contact" className='button_with_border flex flex-row items-center my-1'>
            Contact me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron