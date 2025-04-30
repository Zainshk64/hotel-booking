import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import { FaStar } from "react-icons/fa";
const Testinomial = () => {

    const Star =()=>{
        return (
            <div className='text-orange-400 flex ' >
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>

            </div>
        )

    }
  return (
    <div className='px-6  md:px-16 lg:px-24 bg-[#F8FAFC] mt-10 pt-10 pb-20 '>
        <div>
            <Title title={'What Our Guests Say'} subTitle={'Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world.'} />
        </div>
        <div className='grid grid-cols-1 pt-10 md:grid-cols-2  lg:grid-cols-3 gap-5' >
            {
                testimonials.map((item,index)=>(
                    <div key={index} className='w-7/7 border shadow-md border-neutral-100 rounded-md bg-white p-5 my-3' >
                        <div className='inline-flex gap-2 items-center' > 
                            <img src={item.image} className='w-15 rounded-full' alt="" />
                            <div>

                            <h1 className='font-semibold text-lg' >{item.name}</h1>
                            <p className='text-gray-500' >{item.address}</p>
                            </div>
                        </div>
                        <div className='my-3 flex items-center' >Rating: <Star /></div>
                        <p className='text-gray-500' >{item.review}</p>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Testinomial 
