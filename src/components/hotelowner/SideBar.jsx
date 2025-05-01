import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    const sideLinks = [
        { name: "Dashboard", path: '/owner', icon: assets.dashboardIcon },
        { name: "Add Room", path: '/owner/addroom', icon: assets.addIcon },
        { name: "List Room", path: '/owner/listroom', icon: assets.listIcon },

    ]
    return (
        <div className='md:w-64 w-16 border-r h-full text-lg flex flex-col transition-all duration-300 border-gray-300 ' >
            {sideLinks.map((item, index) =>
                <NavLink key={index} to={item.path} end className={({isActive})=> `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? 'border-r-4 md:border-r[5px] bg-blue-600/10 border-blue-600 text-blue-600' : "hover:bg-gray-100/90 text-gray-700 border-white " }`} >
                    <img src={item.icon} className='' alt="" />
                    <p className='md:block hidden text-center' > {item.name}</p>
                </NavLink>
            )}
        </div>
    )
}

export default SideBar
