import "../app.css"

interface LogoCircleProps {
  logo: string
}

function LogoCircle({ logo }: LogoCircleProps) {
  return (
    <div className='bg-primaryMedium rounded-full p-2 m-2 w-20 h-20'>
      <div className='bg-foreground flex justify-center items-center rounded-full w-full h-full'>
        <div className='relative w-14 h-14'>
          {
            logo ?
            <img
              src={logo}
              className='object-contain w-full h-full'
              alt="company logo"
            />
            :
            <p>No logo</p>
          }
        </div>
      </div>
    </div>
  )
}

export default LogoCircle