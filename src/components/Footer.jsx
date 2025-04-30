import React from 'react';
import { assets } from '../assets/assets';
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#F6F9FC] px-6 md:px-16 py-10 lg:px-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start lg:place-items-center gap-8 pb-10'>

                {/* Column 1: Logo + Description + Socials */}
                <div className='text-gray-500 space-y-4'>
                    <img src={assets.logo} className='invert w-28' alt="Logo" />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex gap-3'>
                        <img src={assets.facebookIcon} alt="Facebook" className='w-5 h-5' />
                        <img src={assets.instagramIcon} alt="Instagram" className='w-5 h-5' />
                        <img src={assets.linkendinIcon} alt="LinkedIn" className='w-5 h-5' />
                        <img src={assets.twitterIcon} alt="Twitter" className='w-5 h-5' />
                    </div>
                </div>

                {/* Column 2: Company */}
                <div className='space-y-4'>
                    <h1 className='playfair text-xl'>Company</h1>
                    <div className='flex flex-col text-gray-500 space-y-2 font-light text-sm'>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                        <a href="#">Press</a>
                        <a href="#">Blog</a>
                        <a href="#">Partners</a>
                    </div>
                </div>

                {/* Column 3: Support */}
                <div className='space-y-4'>
                    <h1 className='playfair text-xl'>Support</h1>
                    <div className='flex flex-col text-gray-500 space-y-2 font-light text-sm'>
                        <a href="#">Help Center</a>
                        <a href="#">Safety Information</a>
                        <a href="#">Cancellation Options</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Accessibility</a>
                    </div>
                </div>

                {/* Column 4: Newsletter */}
                <div className='space-y-4'>
                    <h1 className='playfair text-xl'>Stay Updated</h1>
                    <p className='text-gray-500 text-sm'>
                        Subscribe to our newsletter for travel inspiration and special offers.
                    </p>
                    <div className='flex'>
                        <input
                            className='p-2 w-full bg-white border focus:outline-none border-neutral-200'
                            type="email"
                            placeholder='Your Email'
                        />
                        <button className='bg-black text-white p-2 px-3'>
                            <FaArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>

            </div>

            <hr className='border-gray-300' />

            {/* Footer Bottom Row */}
            <div className='text-gray-500 mt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm'>
                <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
                <div className='space-x-3'>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
