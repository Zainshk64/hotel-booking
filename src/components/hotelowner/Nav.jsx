import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react'
const Nav = () => {
    const { user } = useUser();

    return (
        <div className='flex border-b border-neutral-300 pb-4 justify-between mt-4 px-8 items-center '>
            <Link to={'/'} >
                <img src={assets.logo} className='h-9 invert' alt="" />
            </Link>
            <div>

                {
                    user ? <UserButton /> : "User"
                }
            </div>

        </div>
    )
}

export default Nav
