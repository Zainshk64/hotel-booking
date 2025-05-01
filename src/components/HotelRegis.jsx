import React from 'react'
import { assets, cities } from '../assets/assets'
const HotelRegis = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex  items-center justify-center bg-black/70 ' >
        <form className='bg-white flex rounded-xl max-w-4xl max-md:mx-2 ' >
            <img  src={assets.regImage} alt="regimg" className='w-1/2 rounded-xl hidden md:block' />
            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10' >
                <img src={assets.closeIcon} alt="close" className='absolute top-4 right-4 h-4 w-4 cursor-pointer' />
                <p className='text-2xl font-semibold mt-6' >Register Your Hotel</p>
                <div className='w-full mt-5 text-black' >
                    <label htmlFor="name">Hotel Name:</label>
                    <input type="text"  placeholder='type'  className='w-full rounded-md border p-2 outline-none border-neutral-300' name="" id="name" required />
                </div>
                <div className='w-full mt-5 text-black' >
                    <label htmlFor="phone">Phone:</label>
                    <input type="text"  placeholder='type'  className='w-full rounded-md border p-2 outline-none border-neutral-300' name="" id="phone" required />
                </div>
                <div className='w-full mt-5 text-black' >
                    <label htmlFor="add">Address:</label>
                    <input type="text"  placeholder='type'  className='w-full rounded-md border p-2 outline-none border-neutral-300' name="" id="add" required />
                </div>
                <div  className='w-full mt-5 text-black'>
                    <label htmlFor="city">City</label>
                    <select name="" id="city" className='border-gray-500 border rounded w-full px-3 py-3 outline-indigo-500 font-light ' >
                        <option value="" className='' >Select City</option>
                        {cities.map((item,index)=>(
                            <option key={index} value="">{item}</option>
                        ))}
                    </select>
                </div>
                <button className='mr-auto px-3 py-2 bg-indigo-500 text-white mt-5 rounded-md cursor-pointer'  >Register</button>
            </div>
        </form>
      
    </div>
  )
}

export default HotelRegis
