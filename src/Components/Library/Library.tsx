import React from 'react'
import a from '../../Assets/Vector.png'
import a1 from '../../Assets/Vector2.png'
import a2 from '../../Assets/Group.png'
import a3 from '../../Assets/Ellipse 19.png'
import a4 from '../../Assets/Ellipse 25.png'
type Props = {}

const Library = (props: Props) => {
  return (
    <div>
        <section className='container mx-auto'>
            <div>
                <h1 className='text-textColor text-3xl font-bold py-3'>CareFinder</h1>
            </div>
            <div className='float-right '>
                <img src={a3} alt='profile-dp'  className='h-20 w-20'/>
                
            </div>
            <h2 className='text-center font-bold text-3xl'>My Library</h2>
            <p className='text-gray-500 font-semibold text-2xl text-center py-4'>Book Appointment to visit saved hospitals</p>
        <div className='my-4  mx-auto'>
            
<div className='grid justify-center  w-full'>
<div className='flex my-2'>
<p className=' bg-darkgray rounded-xl flex '>
    <img src={a4} alt='hospital building' className='h-12 w-12 mx-5'/>
<div className='px-5 font-medium'>
    <h4 className='text-lg'>Eve Foundation Hospital</h4>
    <p className='text-sm pb-1'>32 Admiralty way, lekki phase 1Lagos</p>
</div>
</p>
<p className='bg-darkgray flex rounded-xl w-36 items-center mx-3'>
<img src={a} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a1} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a2} alt='icon' className='h-6 w-6 mx-3'/>
</p>
</div>
<div className='flex my-2'>
<p className='bg-darkgray rounded-xl flex'>
    <img src={a4} alt='hospital building' className='h-12 w-12 mx-5'/>
<div className='px-5 font-medium'>
    <h4 className='text-lg'>Eve Foundation Hospital</h4>
    <p className='text-sm pb-1'>32 Admiralty way, lekki phase 1Lagos</p>
</div>
</p>
<p className='bg-darkgray flex rounded-xl w-36 items-center mx-3'>
<img src={a} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a1} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a2} alt='icon' className='h-6 w-6 mx-3'/>
</p>
</div>
<div className='flex my-2'>
<p className=' bg-darkgray rounded-xl flex'>
    <img src={a4} alt='hospital building' className='h-12 w-12 mx-5'/>
<div className='px-5 font-medium'>
    <h4 className='text-lg'>Eve Foundation Hospital</h4>
    <p className='text-sm pb-1'>32 Admiralty way, lekki phase 1Lagos</p>
</div>
</p>
<p className='bg-darkgray flex rounded-xl w-36 items-center mx-3'>
<img src={a} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a1} alt='icon' className='h-6 w-6 mx-3'/>
<img src={a2} alt='icon' className='h-6 w-6 mx-3'/>
</p>
</div>
</div>
        </div>
        </section>
    </div>
  )
}

export default Library