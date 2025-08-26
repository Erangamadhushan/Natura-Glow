
import { menuLogo } from '../assets/assets.js';
import React from 'react';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconsStyle = {
        width:'25px',
        height:'25px',
        color:'white',
        backgroudColor:'white',
        backgroundClip:'text'
    }
    const handleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='sticky top-0 z-20 left-0 bg-black opacity-20'>
            {/* set blur navbar  */}
            
            <nav className='w-full z-50 max-w-[100%] flex justify-between inset-0  items-center  p-4'>
                <div>
                    <a href="/" ><h1 className='text-2xl text-black font-bold'>Natura Glow</h1></a>
                </div>
                <div className='hidden md:flex md:flex-start space-x-4'>
                    <a href="/" className='text-black hover:text-pink-600 text-lg'>Home</a>
                    <a href="/about" className='text-black hover:text-pink-600 text-lg'>About</a>
                    <a href="/product" className='text-black hover:text-pink-600 text-lg'>Products</a>
                    <a href="/contact" className='text-black hover:text-pink-600 text-lg'>Contact</a>
                    <a href="/service" className='text-black hover:text-pink-600 text-lg'>Service</a>
                </div>
                <div className='hidden lg:flex items-center space-x-4'>
                    <form className='flex items-center' onSubmit={(e) => {e.preventDefault(); window.alert('Search functionality not implemented yet.')}}>
                        <div>
                            <input type='text' placeholder='Search...' className='px-4 py-2 rounded-l-md focus:outline-none'  required/>
                            <input type='submit' value='Search' className='bg-pink-600 text-white px-4 py-2 rounded-r-md  cursor-pointer hover:bg-pink-700' />
                        </div>
                    </form>
                    
                </div>
                <div className='md:hidden flex items-center space-x-4'>
                    <buthrefn className='bg-gray-800 text-white px-4 py-2 rounded-md duration-300 hover:bg-gray-900' onClick={handleNavbar}><img src={menuLogo} style={iconsStyle} alt='menu'/></buthrefn>
                </div>
                
            </nav>
            {
                isOpen && (
                    <div className='relative left-0 w-full min-h-[150px] duration-300 space-y-4 bg-black flex flex-col items-center justify-center py-4'>
                        <a href="/" className='text-white hover:text-pink-600 text-lg'>Home</a>
                        <a href="/about" className='text-white hover:text-pink-600 text-lg'>About</a>
                        <a href="/product" className='text-white hover:text-pink-600 text-lg'>Products</a>
                        <a href="/contact" className='text-white hover:text-pink-600 text-lg'>Contact</a>
                        <a href="/service" className='text-white hover:text-pink-600 text-lg'>Service</a>
                    </div>
                )
            }
        </div>
    )
}
{/* <div >
    <ul className="navbar-nav">
        <li className="nav-item active">
            <a href="/" className="nav-a">Home</a>
        </li>
        <li className="nav-item">
            <a href="/about" className="nav-a">About</a>
        </li>
        <li className="nav-item">
            <a href="/contact" className="nav-a">Contact</a>
        </li>
        <li className="nav-item">
            <a href="/service" className="nav-a">Service</a>
        </li>
    </ul>  
</div> */}
export default Navbar;