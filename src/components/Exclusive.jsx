import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8  md:px-16 lg:px-24 pb-10  ">
                {exclusiveOffers.map((item, index) => (
                    <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg">
                        {/* Background Image */}
                        <div
                            className="relative flex items-start bg-cover bg-no-repeat bg-center h-70"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            {/* Dark overlay */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

                            {/* Badge */}
                            <div className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {item.priceOff} %OFF
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-4 left-4 text-white pr-4">
                                <h2 className="text-2xl playfair font-bold mb-2">{item.title}</h2>
                                <p className="text-sm mb-1">{item.description}</p>
                                <p className="text-xs mb-4">Expires {item.expiryDate}</p>
                                <button className="flex group  items-center gap-2 text-sm font-semibold">
                                    View Offers <span className='group-hover:translate-x-1 transition-all' >→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Exclusive
