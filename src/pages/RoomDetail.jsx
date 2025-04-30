import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { Star } from '../components/Testinomial';
const RoomDetail = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id);
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    }, [])

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'
        >
            <div className='flex items-center gap-2' >
                <h1 className='text-3xl playfair' >{room.hotel.name} <span className='text-sm'>({room.roomType})</span> </h1>
                <p className='p-1 px-2 font-inter text-sm rounded-lg text-white bg-orange-500' >20% OFF</p>
            </div>
            <div className='flex items-center' >
                <Star />
                <p className='ml-2' >200+ Ratings</p>
            </div>
            <div className='inline-flex gap-1'>
                <img src={assets.locationIcon} alt="" />
                <p className='text-gray-400' > {room.hotel.address} </p>
            </div>
            <div className='flex flex-col lg:flex-row mt-6 gap-6 '>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="room Wide Image" className='w-full rounded-xl shadow-lg object-cover transition-all  ' />



                </div>
                <div className='grid grid-cols-2 gap-4 w-full lg:w-1/2' >
                    {
                        room?.images.length > 1 && room.images.map((img, index) => (
                            <img src={img} key={index} onClick={() => setMainImage(img)} alt=""
                                className={`w-full  rounded-xl object-cover cursor-pointer ${mainImage === img && ' shadow-lg outline-2 outline-red-400'} `} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row justify-between mt-6'>

                    <h1 className='text-xl sm:text-3xl playfair mb-2'>Experience Luxury Like Never</h1>
                    <p className='font-medium text-2xl'>${room.pricePerNight}/Night</p>
                </div>
                <div className='flex mt-5 flex-col sm:flex-row  gap-3' >
                    {
                        room.amenities.map((item, index) => (
                            <div key={index} className='flex  items-center gap-2 px-3 py-2 rounded-lg bg-[#F5f5FF]/70' >
                                <img src={facilityIcons[item]} alt="" className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='bg-white shade mt-10 p-5 ' >
                <div className='flex flex-col lg:flex-row  gap-5 ' >
                    <div className='flex flex-col lg:border-r lg:border-neutral-300  lg:pr-10 ' >
                        <label htmlFor="checkin">Check-In</label>
                        <input type="date" name="" className='border border-neutral-200 p-2' id="checkin" />
                    </div>
                    <div className='flex flex-col  lg:border-r lg:border-neutral-300  lg:pr-10 lg:pl-5' >
                        <label htmlFor="checkout">Check-Out</label>
                        <input type="date" name="" className='border border-neutral-200 p-2' id="checkout" />
                    </div>
                    <div className='flex flex-col  lg:border-r lg:border-neutral-300  lg:pr-10 lg:pl-5' >
                        <label htmlFor="guest">Guest</label>
                        <input type="number" name="" className='border border-neutral-200 p-2' id="guest" />
                    </div>
                    <button className='bg-blue-600 px-6 py-3 text-white cursor-pointer shadow active:scale-95 transition-all ' >Check Availabilty</button>

                </div>

            </div>


        </div>
    )
}

export default RoomDetail
