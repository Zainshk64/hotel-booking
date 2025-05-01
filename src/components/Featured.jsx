import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
    const navigate = useNavigate();
  return (
    <div className='px-6 pb-20 bg-[#F8FAFC] md:px-16 lg:px-24  py-10 flex flex-col items-center   ' >
    <Title title={'Featured Destination'} subTitle={'Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'} />
      <div className='relative grid md:px-18  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-5 ' >
        {
            roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))
        }
      </div>
      <button onClick={()=> {navigate('/room'); scrollTo(0,0)}} className='p-2 mt-15 px-4 py-2 cursor-pointer border border-gray-200' > View All Rooms</button>


    </div>
  )
}

export default Featured
