import React from 'react'
import a1 from '../../Assets/Ellipse 14.png'
import a2 from '../../Assets/Ellipse 15.png'
import a3 from '../../Assets/Ellipse 16.png'
import a4 from '../../Assets/Ellipse 17.png'
type Props = {}

const Appointment = (props: Props) => {
  return (
    <div className=" h-full">
        <section className='grid h-full container mx-auto grid-cols-1 lg:grid-cols-2 '>
<div className='bg-white  w-full mx-auto px-4'>
<h2 className=' font-bold py-8 text-textColor text-center text-3xl'>QUALIFIED DOCTORS</h2>
<div className='grid grid-cols-2  m-auto gap-7 '>
    <div className='h-1/2 w-1/2 my-5 mx-auto text-center flex flex-col'>
        <img src={a1} alt='medical doctor'/>
        <h3 className='text-textColor font-medium'>Dr Cole Ben</h3>
        <p className='text-gray-400'>Pediatrician</p>
        <p className='text-gray-400'>Goodwill Hospital</p>
    </div>
    <div className='h-1/2 w-1/2 my-5 mx-auto text-center flex flex-col'>
        <img src={a2} alt='medical doctor'/>
        <h3 className='text-textColor font-medium'>Dr Cole Ben</h3>
        <p className='text-gray-400'>Pediatrician</p>
        <p className='text-gray-400'>Goodwill Hospital</p>
    </div>
    <div className='h-1/2 w-1/2 my-5 mx-auto text-center flex flex-col'>
        <img src={a3} alt='medical doctor'/>
        <h3 className='text-textColor font-medium'>Dr Cole Ben</h3>
        <p className='text-gray-400'>Pediatrician</p>
        <p className='text-gray-400'>Goodwill Hospital</p>
    </div>
    <div className='h-1/2 w-1/2 my-5 text-center mx-auto flex flex-col'>
        <img src={a4} alt='medical doctor'/>
        <h3 className='text-textColor font-medium'>Dr Cole Ben</h3>
        <p className='text-gray-400'>Pediatrician</p>
        <p className='text-gray-400'>Goodwill Hospital</p>
    </div>
</div>
</div>
<div>
<form className="bg-white lg:w-1/2 w-full lg:mx-auto px-4">
			<h1 className='bg-textColor p-2 rounded-2xl text-center text-white font-medium mb-6 mt-10 text-2xl'>Book an Appointment</h1>
			<div className="flex items-center border-2 py-2  bg-gray-200 px-3 rounded-xl my-6 relative">
				
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400  absolute right-3" >
						<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
					</svg>
				<input className="pl-2 outline-none  bg-gray-200 border-none" type="text" name="" id="" placeholder="Address" />
      </div>
				<div className="flex items-center border-2 py-2 bg-gray-200 px-3 relative rounded-xl my-6">
                <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
					<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Choose Hospital" />
      </div>
					<div className="flex items-center bg-gray-200 relative border-2 py-2 px-3 rounded-xl my-6">
                    <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
						<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Choose Department" />
      </div>
      <div className="flex items-center bg-gray-200 relative border-2 py-2 px-3 rounded-xl my-6">
                    <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
						<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Enter Name" />
      </div>
      <div className="flex items-center bg-gray-200 relative border-2 py-2 px-3 rounded-xl my-6">
                    <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
						<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Enter Email" />
      </div>
      <div className="flex items-center bg-gray-200 relative border-2 py-2 px-3 rounded-xl my-6">
                    <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
						<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Select Date" />
      </div>
      <div className="flex items-center bg-gray-200 relative border-2 py-2 px-3 rounded-xl my-6">
                    <svg  className="h-5 w-5 text-gray-400 absolute right-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        
						<input className="pl-2 outline-none border-none bg-gray-200" type="text" name="" id="" placeholder="Select Time" />
      </div>
						
							<button type="submit" className="block w-full bg-indigo-600 my-4 py-2 rounded-xl text-white font-semibold mb-2">Book Appointment Now</button>
							
		</form>
</div>
        </section>
    </div>
  )
}

export default Appointment