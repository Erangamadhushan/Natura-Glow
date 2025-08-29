import React from 'react'
import {mainImage} from '../../../assets/assets';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
        <div className="grid ld:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 min-h-[70vh] p-3"  style={{backgroundImage:`url(${mainImage})`, backgroundPosition:'center',objectFit:'cover',backgroundRepeat:'no-repeat',width:'100%'}}>
            <div className='flex justify-center items-center flex-col text-black'>
                <h1 className="text-4xl md:text-5xl font-bold text-black p-5 ">Flat 20% Off</h1>
                <h2 className=" text-3xl md:text-6xl text-center font-bold text-black p-5" >Discover Your Natural Radiance with Natura Glow</h2>
                <p className='py-10 text-lg'>Premium cosmetics crafted with natural ingredients to enhance your beauty, not mask it.</p>
                <Link to="/product" className="bg-green-600 p-4 rounded-lg px-10 text-xl text-white">Shop Now</Link>
            </div>
            <div className="flex justify-center items-center h-screen" >
                
            </div>
        </div>
    </div>
  )
}

export default Hero