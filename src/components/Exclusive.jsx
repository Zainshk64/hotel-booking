import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Exclusive = () => {
  return (
    <div>
        <div className='flex px-6  md:px-16 lg:px-24  flex-col md:flex-row justify-between pb-20 pt-10 ' >
            <Title align={'left'} title={'Exclusive Offers'} subTitle={'Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'} />

            <button className='inline-flex group items-center gap-2' >
                View All Offers 
                <img src={assets.arrowIcon} alt="" className='group-hover:translate-x-1 transition-all ' />
            </button>


        </div>
      
    </div>
  )
}

export default Exclusive
