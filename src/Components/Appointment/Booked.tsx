import React from 'react'
import a from '../../Assets/ic_round-done-outline.png'
type Props = {}

const Booked = (props: Props) => {
  return (
    <div>
        <section className='grid justify-center text-center content-center'>
            <h1 className='py-6 font-bold text-3xl'>Appointment Booked Successfully</h1>
            <img src={a} alt='done-icon' className='py-5 mx-auto'/>
            <p className='text-gray-300 py-5 text-xl'>Kindly check your email for details</p>
        </section>
    </div>
  )
}

export default Booked