import React from 'react'
import bg from '../../Assets/Group 36.png'
import a1 from '../../Assets/Ellipse 9.png'
import a2 from '../../Assets/Ellipse 10.png'
import a3 from '../../Assets/Ellipse 11.png'
import a4 from '../../Assets/Ellipse 12.png'
type Props = {}

const Works = (props: Props) => {
  return (
    <div className='h-full '>
  <div className='h-full lg:h-4/5 w-4/5 relative justify-center m-auto grid content-center'>
    <img src={bg} alt='background' className='relative'/>
  </div>
 <div className='flex justify-center ' >
     <h1 className='absolute top-0  text-center  text-textColor font-semibold text-3xl'>How It Works</h1>

  </div>
  <div className='absolute '>
    <img src={a1} />
  </div>
  <div className='absolute '>
    <img src={a2} />
  </div>
  <div className='absolute '>
    <img src={a3} />
  </div>
  <div className='absolute'>
    <img src={a4} />
  </div>
</div>

  )
}

export default Works