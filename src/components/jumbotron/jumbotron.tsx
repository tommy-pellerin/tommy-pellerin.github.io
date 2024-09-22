import "./style.css"

function Jumbotron() {
  return (
    <div className='md:grid grid-cols-2 gap-4 place-items-center mt-5'>
      <div className="col-span-1 md:order-2 p-5 overflow-hidden">
        <div className="md:w-3/5 h-auto">
          <div className="animated-border rounded-full">
            <img src="/dalle-E.png" alt="my univers generate by dalle-e AI" className="object-contain w-full h-full rounded-full"/>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:order-1 md:text-end p-3">
        <h1>Hi <span role="img" aria-label="hi emoji" className="wave">👋</span> ! i’m Tommy</h1>
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