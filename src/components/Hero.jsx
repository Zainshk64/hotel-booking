import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='herobg flex flex-col text-white  justify-center py-32  px-6 md:px-16 lg:px-24 xl:px-32' >
            <div className='md:w-3/6'>
                <span className='bg-[#4C86B0] px-2 py-1 rounded-full '>The Ulimate Hotel Experience</span>
                <h1 className='text-4xl sm:text-5xl playfair my-2 font-bold ' >Discover Your Perfect
                    Getaway Destination</h1>
                <p>Unparalleled luxury and comfort await at the world's most exclusive
                    hotels and resorts. Start your journey today</p>
            </div>
            <div>
                <form className='bg-white p-3 md:w-max py-5 flex gap-3  flex-col md:flex-row rounded-lg text-black mt-5'>
                    <div>
                        <div className='flex flex-row items-center gap-1' >
                            <img src={assets.calenderIcon} alt="" className='h-4' />
                            <label htmlFor="">Destination</label>
                        </div>
                        <input type="text" list='destinations' placeholder='Select City' className='border p-1 border-gray-200 rounded-md mt-2 w-full' />
                        <datalist id="destinations">
                            {cities.map((item, index) => (
                                <option value={item} key={index}></option>
                            ))}
                        </datalist>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-1' >
                            <img src={assets.calenderIcon} alt="" className='h-4' />
                            <label htmlFor="">Check In</label>
                        </div>
                        <input type="date" name="" id="" className='border p-1 w-full border-gray-200 rounded-md mt-2' />
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-1' >
                            <img src={assets.calenderIcon} alt="" className='h-4' />
                            <label htmlFor="">Check Out</label>
                        </div>
                        <input type="date" name="" id="" className='border p-1 w-full border-gray-200 rounded-md mt-2' />

                    </div>
                    <div>
                        <div className='flex ' >

                            <label htmlFor="">Guest</label>
                        </div>
                        <input type="number" className='border p-1 w-full border-gray-200 max-w-16 rounded-md mt-2' />
                    </div>
                    <button className='bg-black items-center flex text-white py-2 px-3 rounded-md my-auto max-md:full '>
                        <img src={assets.searchIcon} alt="" className='w-6' />

                        <span>Search</span>
                    </button>
                </form>
            </div>


        </div>
    )
}
export default Hero
