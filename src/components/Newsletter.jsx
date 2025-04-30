import React from 'react'
import Title from './Title'

const Newsletter = () => {
  return (
    <div className='px-6 md:px-16 lg:px-40 text-white py-30 bg-white ' >
        <div className='bg-[#101828] rounded-lg pb-10 text-center mb-5 ' >
            <Title title={'Stay Inspired'} subTitle={'Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.'} />
            <div className='pb-10 space-x-2' >
                <input type="email" placeholder='Email' className='border focus:outline-none border-neutral-100/20 bg-[#28303E]  p-2 px-3 '  />
                <button className='px-3 py-2 bg-black rounded-md cursor-pointer shadow-lg' >Subscribe</button>
                <p className='text-gray-500 text-xs mt-5'>By subscribing, you agree to our Privacy Policy and consent to receive updates.

</p>
            </div>
        </div>
     
      
    </div>
  )
}

export default Newsletter
