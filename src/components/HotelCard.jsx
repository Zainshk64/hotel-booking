import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const HotelCard = ({ room, index }) => {
    return (
        <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id}
            className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
            <img src={room.images[0]} alt="" />

            {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 rounded-full' >Best Seller</p>
            }

            <div className='p-4 pt-5' >
                <div className='flex items-center justify-between' >
                    <p className='playfair text-xl font-medium text-gray-800' >{room.hotel.name}</p>
                    <div className='flex items-center gap-2' >
                        <img src={assets.starIconFilled} alt="start-icon" />4.5
                    </div>
                </div>
                <div className='flex items-center' >
                    <img src={assets.locationIcon} alt="location" />
                    <span>{room.hotel.address}</span>
                </div>
                <div className='flex items-center justify-between mt-2' >
                    <p> <span className='text-gray-800' >${room.pricePerNight}</span> /Night</p>
                    <button className='px-4 py-2 font-medium border border-gray-300 rounded cursor-pointer transition-all' >Book Now</button>
                </div>
            </div>


        </Link>
    )
}

export default HotelCard
