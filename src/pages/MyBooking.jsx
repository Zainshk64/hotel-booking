import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBooking = () => {
    const [booking, setbooking] = useState(userBookingsDummyData);
    return (
        <div className='py-28 md:pb-35 md:pt-32 px-6 md:px-16 lg:px-24 xl:px-32'>
            <Title title={'My Bookings'} subTitle={'Easily manage your past, current and upcoming hotel reservation in one place .Plan your trips seamlessly with just a few clicks'} align={'left'} />

            <div className='max-w-6xl mt-8 w-full text-gray-800' >
                <div className=' hidden md:grid md:grid-cols-[3fr_2fr_1fr] 
            w-full border-b border-gray-300 font-medium text-base py-3' >
                    <div className='w-1/3' >Hotels</div>
                    <div className='w-1/3' >Date & Timings</div>
                    <div className='w-1/3' >Payment</div>

                </div>
                <div>
                    {
                        booking.map((item) => (
                            <div key={item._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] 
            w-full border-b border-gray-300 py-6 first:border-t ' >
                                <div className='flex flex-col md:flex-row gap-4' >
                                    <img src={item.room.images[0]} alt="" className='min-md:w-44 rounded shadow object-cover' />
                                    <div>
                                        <p className='playfair text-xl' >{item.hotel.name}
                                            <span className='text-sm' > ({item.room.roomType}) </span>
                                        </p>
                                        <div className='text-sm flex gap-2' >
                                            <img src={assets.locationIcon} alt="loc" />
                                            <span>{item.hotel.address}</span>
                                        </div>
                                        <div className='text-sm flex gap-2 mt-5' >
                                            <img src={assets.guestsIcon} alt="loc" />
                                            <span>Guest :1</span>
                                        </div>
                                        <p className='font-bold'>Total: ${item.totalPrice} </p>
                                    </div>

                                </div>
                                <div className='flex flex-row md:items-center md:gap-8 mt-3 gap-5'>
                                    <div className='border-r pr-5 border-neutral-300' >

                                        <p>Check In</p>
                                        <p>{new Date(item.checkInDate).toDateString()}</p>
                                    </div>
                                    <div>

                                        <p>Check Out</p>
                                        <p>{new Date(item.checkOutDate).toDateString()}</p>
                                    </div>
                                </div>

                                <div className='flex flex-col  items-start justify-center'>
                                    <div className='flex items-center gap-2' >
                                        <div className={`h-3 w-3 rounded-full ${item.isPaid ? "bg-green-500" : 'bg-red-500'}`} >

                                        </div>
                                        <p> {item.isPaid ? "Paid" : 'Not Paid'} </p>
                                    </div>
                                    <button className={` ${!item.isPaid && 'border rounded-md px-3 py-2' } mt-3 hover:bg-black hover:text-white transition-all cursor-pointer duration-150 `}>
                                    {item.isPaid  ? "" : "Pay Now"}

                                    </button>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MyBooking
