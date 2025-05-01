import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    const [dash, setdash] = useState(dashboardDummyData);
    return (
        <div>
            <div>
                <Title title={'Dashboard'} font={''} align={'left'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt quasi exercitationem adipisci hic et sequi, ratione libero distinctio tempore itaque dolorem quas veritatis explicabo odit nisi qui eligendi illum.'} />
            </div>
            <div className='flex gap-3' >

                <div className='flex  items-center gap-4 bg-indigo-400/10 p-3' >
                    <img src={assets.totalBookingIcon} alt="" />
                    <div>
                        <p>Total Bookings</p>
                        <p>{dash.totalBookings}</p>
                    </div>

                </div>
                <div className='flex  items-center gap-4 bg-indigo-400/10 p-3' >
                    <img src={assets.totalRevenueIcon} alt="" />
                    <div>
                        <p>Total Bookings</p>
                        <p>{dash.totalRevenue}</p>
                    </div>

                </div>
            </div>
            <h1 className='text-2xl mt-4' >User Booking</h1>
            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll' >
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray800 font-medium' >User Name</th>
                            <th className='py-3 px-4 text-gray800 font-medium' >Room Name</th> <th className='py-3 px-4 text-gray800 font-medium' >Total Amount</th> <th className='py-3 px-4 text-gray800 font-medium' >Payment Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {dash.bookings.map((item,index)=>(
                            <tr key={index} >
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300' >{item.user.username}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300' >{item.room.roomType}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300' > ${item.totalPrice}</td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300' >{item.isPaid ? 'compl' : 'Pending'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Dashboard
