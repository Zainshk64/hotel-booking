import React, { useState } from 'react'
import Title  from '../../components/Title'
import { assets } from '../../assets/assets'
const AddRoom = () => {
  const [image, setimg] = useState({
    1:null,
    2:null,
    3:null,
    4:null,

  })
  const [input , setInput] = useState({
    roomType :'',
    pricePerNight: 0,
    amenities: {
      'Free Wifi' : false,
      'free breakfast' : false,
        'room service' :false,
        'mountain view' : false,
        'pool access' : false
    }
  })
  return (
    <form className='-mt-8' >
      <Title align={'left'} title={'Add Room'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt quasi exercitationem adipisci hic et sequi, ratione libero distinctio tempore itaque dolorem quas veritatis explicabo odit nisi qui eligendi illum.'}  />
      <p>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap' >
        {Object.keys(image).map((key)=>(
          <label htmlFor={`roomimage${key}`}>
            <img className='max-h-13 cursor-pointer opacity-80' src={image[key] ? URL.createObjectURL(image[key]) : assets.uploadArea } alt="" />
            <input type="file" name="" id={`roomimage${key}`} hidden onChange={e => setimg({...image , [key]: e.target.files[0] })} />
          </label>

        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4' >

        <div className='flex-1 max-w-48'>
          <p>Room Type</p>
          <select value={input.roomType} onChange={e=> setInput({...input , roomType :e.target.value})} name="" id="" className='border opacity-80 border-gray-200 mt-1 rounded p-2 w-full'>
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury room">Luxury room</option>
            <option value="Family Suite">Fmaily Suite</option>
          </select>

        </div>

        <div>
          <p>Price <span>/Night</span> </p>
          <input className='border border-gray-300 mt-1 rounded p-2 w-24' type="number" name="" value={input.pricePerNight}  placeholder="0" id="" 
          onChange={e=> ({...input , pricePerNight : e.target.value})} />
        </div>

      </div>
        <div>
          <p>Amenities</p>
          <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm' >
            {Object.keys(input.amenities).map((item,index)=>(
              <div key={index} >
                <input type="checkbox" name="" id={`item${index+1}`} checked={input.amenities[item]}  onChange={()=> setInput({...input, amenities : {...input.amenities, [item]: !input.amenities}})}/>
              <label htmlFor={`item${index+1}`}>{item}</label>
              </div>
            ))}

          </div>

        </div>
        <button>Add Rooms</button>
      
    </form>
  )
}

export default AddRoom
