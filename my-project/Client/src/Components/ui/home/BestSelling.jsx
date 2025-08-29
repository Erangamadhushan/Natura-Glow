import React from 'react'
import {popularItems} from '../../../assets/assets.js';
import { Link } from 'react-router-dom';

function BestSelling() {

    const cosmeticsStyles = {
        backgroundColor: 'white',
        minHeight:'200px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
    }
    
  return (
    <div>
        <div className='py-5 flex flex-col justify-center items-center min-h-[50vh]'>
            <div className='py-5'>
                <h1 className=' text-2xl md:text-5xl font-bold text-black text-center'>Our <span className='text-green-500'>Best</span> <span className='text-green-500'>Sellers</span></h1>
                <p className='text-lg text-center '>Explore our top-rated produ<span className='text-white'></span><span className='text-black xl:text-white'>cts loved by our customers.</span></p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10'>
                {
                    popularItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center items-center p-5 w-[350px] duration-300 hover:scale(1.5) scroll-up" style={cosmeticsStyles}>
                                <img src={item.image} alt={item.name} className="w-[250px] h-[250px]"/>
                                <p className='text-center py-3 text-xl font-bold'>{item.title}</p>
                                <p className='text-center'>{item.desc}</p>
                                <p className='p-5 text-left text-lg font-bold'>${item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='my-10'>
                <Link to="/product" className="bg-green-600 p-4 rounded-lg px-10 text-xl text-white">View All Products</Link>
            </div>
        </div>
    </div>
  )
}

export default BestSelling