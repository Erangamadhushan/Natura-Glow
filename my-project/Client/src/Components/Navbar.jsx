import { Link } from 'react-router-dom';
import menu from '../assets/assets.js';
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
        <div>
            <nav className='w-full max-w-[100%] flex justify-between items-center bg-black p-4'>
                <div>
                    <Link to="/" ><h1 className='text-2xl text-white font-bold'>Natura Glow</h1></Link>
                </div>
                <div className='hidden md:flex md:flex-start space-x-4'>
                    <Link to="/" className='text-white hover:text-pink-600 text-lg'>Home</Link>
                    <Link to="/about" className='text-white hover:text-pink-600 text-lg'>About</Link>
                    <Link to="/product" className='text-white hover:text-pink-600 text-lg'>Products</Link>
                    <Link to="/contact" className='text-white hover:text-pink-600 text-lg'>Contact</Link>
                    <Link to="/service" className='text-white hover:text-pink-600 text-lg'>Service</Link>
                </div>
                <div className='hidden lg:flex items-center space-x-4'>
                    <form className='flex items-center' onSubmit={(e) => {e.preventDefault(); window.alert('Search functionality not implemented yet.')}}>
                        <div>
                            <input type='text' placeholder='Search...' className='px-4 py-2 rounded-l-md focus:outline-none' />
                            <input type='submit' value='Search' className='bg-pink-600 text-white px-4 py-2 rounded-r-md  cursor-pointer hover:bg-pink-700' />
                        </div>
                    </form>
                    
                </div>
                <div className='md:hidden flex items-center space-x-4'>
                    <button className='bg-gray-800 text-white px-4 py-2 rounded-md duration-300 hover:bg-gray-900' onClick={handleNavbar}><img src={menu} style={iconsStyle} alt='menu'/></button>
                </div>
                
            </nav>
            {
                isOpen && (
                    <div className='relative left-0 w-full min-h-[150px] duration-300 space-y-4 bg-black flex flex-col items-center justify-center py-4'>
                        <Link to="/" className='text-white hover:text-pink-600 text-lg'>Home</Link>
                        <Link to="/about" className='text-white hover:text-pink-600 text-lg'>About</Link>
                        <Link to="/product" className='text-white hover:text-pink-600 text-lg'>Products</Link>
                        <Link to="/contact" className='text-white hover:text-pink-600 text-lg'>Contact</Link>
                        <Link to="/service" className='text-white hover:text-pink-600 text-lg'>Service</Link>
                    </div>
                )
            }
        </div>
    )
}
{/* <div >
    <ul className="navbar-nav">
        <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
            <Link to="/service" className="nav-link">Service</Link>
        </li>
    </ul>  
</div> */}
export default Navbar;