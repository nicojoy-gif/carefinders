import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-full'>
      <section className='bg-gray-200 lg:h-1/2'>
<div className='grid grid-cols-1 lg:grid-cols-2 mx-auto container'>
<div className='grid grid-cols-1 grid-cols-2 gap-5'>
<div className='mx-4'>
<h3 className='text-2xl text-textColor font-medium py-7'>CareFinder</h3>
<div className='font-medium py-3'>
<p>Plot 42, Akinza Street,</p>
<p>Victoria island, Lagos</p>
<p>+23491167351788</p>
</div>
</div>
</div>
<div className='grid grid-cols-1 grid-cols-2 gap-5'>
<div className='mx-4'>
<h3 className='text-2xl text-textColor font-medium py-7'>About Us</h3>
<div className='font-medium py-3'>
<p>News & Media</p>
<p>Contact Us</p>

</div>
</div>
<div className='mx-4'>
<h3 className='text-2xl text-textColor font-medium py-7'>Quick Links</h3>
<div className='font-medium py-3'>
<p>My account</p>
<p>Book an appointment</p>
<p>Library</p>
</div>
</div>
</div>
</div>
      </section>
    </div>
  )
}

export default Footer