import React, { useEffect, useState } from 'react'
import { assets, navLinks } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { UserButton, useClerk, useUser } from '@clerk/clerk-react'
const Navbar = () => {

    const { openSignIn } = useClerk();
    const { user } = useUser();

    const [isMenu, setIsMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);


    const navigate = useNavigate();
    const BookIcon = () => (
        <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
        </svg>
    )

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScroll(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <>
            <nav className={`fixed top-0 w-full p-4 z-50 px-6 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center transition-all duration-500 ease-in-out  ${isScroll ? 'bg-white/50 backdrop-blur-lg py-3 md:py-4 text-gray-700' : 'py-4 md:py-6' } `} >
                <div  >
                    <img src={assets.logo} alt="" className={`h-9 ${isScroll ? 'invert' : ''} `} />
                </div>
                <div className={`md:flex hidden text-white font-light items-center space-x-6 ${isScroll ? 'invert' : ''} text-md `} >
                    {navLinks.map((item, index) => (
                        <Link to={item.path} key={index} className='links'  >{item.link}</Link>
                    ))}
                    <button className='px-5 rounded-full border text-md  border-neutral-300 ' >Dashboard</button>
                </div>


                {
                    user ? <UserButton  >
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Booking' labelIcon={<BookIcon />} onClick={() => navigate('/mybookings')} />
                        </UserButton.MenuItems>
                    </UserButton> :
                        <div className='md:flex hidden' >
                            <button onClick={openSignIn} className='px-5 py-2 rounded-xl border-none text-lg  bg-black text-white' >Login</button>
                        </div>
                }
                <div className={`md:hidden  ${isScroll ? 'invert' : ''} text-white `} onClick={() => setIsMenu(true)}  >
                    <CgMenuRight className='h-8 w-8' />
                </div>
            </nav>

            {/* mobile */}
            {
                isMenu ? <>
                    <div className={`h-screen flex md:hidden transition-all w-full duration-500 justify-center items-center bg-white fixed top-0 z-50  trans ${isMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className='text-black flex flex-col space-y-6 text-center text-lg ' >
                            {navLinks.map((item, index) => (
                                <Link to={item.path} key={index} className=''  >{item.link}</Link>
                            ))}

                            {
                                user &&  <button onClick={()=>navigate('/owner')} className='px-5 rounded-full border text-md  border-neutral-300 ' >Dashboard</button>
                            }


                           
                            {
                                !user &&  <div className='' >
                                <button onClick={openSignIn} className='px-5 py-2 rounded-xl border-none text-lg  bg-black text-white' >Login</button>
                             </div>
                            }
                        
                        </div>


                        <div className='absolute top-10 right-10' onClick={() => setIsMenu(false)} > <AiOutlineClose className='h-5 w-5' /> </div>

                    </div>



                </>
                    : ''
            }

        </>
    )
}

export default Navbar
