import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { Star } from '../components/Testinomial'
import { useNavigate } from 'react-router-dom'

const ChecksBoxs =({label ,selected = false , onChange =() =>{}})=>{
    return(
        <label className='flex gap-3 items-center cursor-pointer text-sm '>
            <input type="checkbox" checked={selected} onChange={(e)=> onChange(
                e.target.checked ,label)}
            />
            <span className='font-light select-none'  >{label}</span>

        </label>
    )

}

const RadioBut = ({label , selected = false , onChange = ()=>{}})=>{
    return(
        <label className='flex gap-3 items-center cursor-pointer text-sm '>
        <input type="radio" name='sortOpt' checked={selected} onChange={()=> onChange(label)}
        />
        <span className='font-light select-none'>{label}</span>

    </label>
    )
}

const Rooms = () => {
    const navigate = useNavigate();
    const [openFilter , setOpenFilter] = useState(false);

    const roomtype = [
        'Single Bed',
        'Double Bed',
        'Luxery Bed',
        "Family Suite",
    ];
    const priceRange = [
        '0 to 500' ,
        ' 500 to 1000' ,
         '1000 to 2000' , 
         '2000 to 3000',

    ];
    const sortOpt = [
        'Price Low to High',
        'Price Hight to Low',
        'Newest First'
    ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start  justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px32' >
        <div>
            <div>
                <h1 className='playfair text-4xl' >Hotels Rooms</h1>
                <p className='text-gray-500 max-w-130 mt-3 text-sm ' >Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
            </div>

            <div className='space-y-5' >
                {
                    roomsDummyData.map((item,index)=>(
                        <div key={index} className='flex gap-5 mt-10 py-10 border-b border-neutral-200'  >
                            <img onClick={()=> {navigate(`/rooms/${item._id}`) , scrollTo(0,0)}} 
                            src={item.images[0]} 
                            title='View Hotel Room'
                            alt="hotel-img" className='md:w-1/2 rounded-lg object-cover shadow-lg max-h-65 cursor-pointer' />
                            <div className='md:w-1/2 flex flex-col gap-2' >
                                <p className='text-gray-500' >{item.hotel.city}</p>
                                <h1 title='View Hotel Room'  onClick={()=> {navigate(`/rooms/${item._id}`) , scrollTo(0,0)}} className='text-gray-800 cursor-pointer text-3xl playfair' >{item.hotel.name}</h1>
                                <div className='flex items-center' >
                                    <Star/>
                                    <p className='ml-2' >200+ Ratings</p>
                                </div>
                                <div className='flex items-center gap-1 '>
                                    <img src={assets.locationIcon} alt="loc-icon" />
                                    <span className='text-gray-500' >{item.hotel.address}</span>

                                </div>
                                <div className='flex flex-wrap items-center mt-1 mb-6 gap-4' >
                                    {
                                        item.amenities.map((item,index)=>(
                                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5f5FF]/70' >
                                                <img src={facilityIcons[item]} alt="" className='w-5 h-5'/>
                                                <p className='text-xs'>{item}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <p className='font-semibold text-xl' >${item.pricePerNight}/Night</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

        <div className='bg-white w-80 border border-gray-300 text-gray-600 
        max-lg:mb-8 min-lg:mt-16 ' >
            <div className={`flex items-center justify-between px-5 py-2 min-lg:border-b border-gray-300 ${openFilter && 'border-b'}`}>
                <p className='text-base font-medium text-gray-800'>Filters</p>
                <div className='text-xs cursor-pointer' >
                    <span className='lg:hidden' onClick={()=> setOpenFilter(!openFilter)} >
                        {openFilter ? 'HIDE' : "SHOW"}
                    </span>
                    <span className='hidden lg:block' >Clear</span>

                </div>
            </div>

            <div className={`${openFilter ? 'h-auto': 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700 `} >
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                    {roomtype.map((room ,index)=>(
                        <ChecksBoxs key={index} label={room} />
                    ))}
                </div>
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                    {priceRange.map((range ,index)=>(
                        <ChecksBoxs key={index} label={`$ ${range}`} />
                    ))}
                </div>
                <div className='px-5 pt-5 pb-4'>
                    <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                    {sortOpt.map((room ,index)=>(
                        <RadioBut key={index} label={room} />
                    ))}
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Rooms
