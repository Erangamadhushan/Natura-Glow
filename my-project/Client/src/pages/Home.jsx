import React from 'react';
import homeImages from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { animate } from 'animejs';

const Home = () => {
    return (
        <>
            <div className="grid ld:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 min-h-[80vh]">
                <div className='flex justify-center items-center flex-col'>
                    <h1 className="text-4xl font-bold text-black p-5 ">Flat 20% Off</h1>
                    <h2 className=" text-3xl md:text-6xl text-center font-bold text-black p-5" >Discover Your Natural Radiance with Natura Glow</h2>
                    <p className='py-10 text-lg'>Premium cosmetics crafted with natural ingredients to enhance your beauty, not mask it.</p>
                    <Link to="/product" className="bg-pink-600 p-4 rounded-lg px-10 text-xl text-white">Shop Now</Link>
                </div>
                <div className="flex justify-center items-center h-screen">
                    
                </div>
            </div>
            <div className='py-10 flex flex-col justify-center items-center min-h-[50vh]'>
                <h1 className='text-4xl font-bold text-black'>Our Best Sellers</h1>
                <p className='text-lg'>Explore our top-rated products loved by our customers.</p>
            </div>
            <div className='py-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]'>
                <div>
                    <h2 className='text-center md:text-4xl font-bold'>Our Products Are</h2>
                </div>
                <div className='flex flex-row justify-center items-center gap-4'>
                    {
                        [1,2,3,4,5,6].map((item) => {
                            return (
                                <div className="w-[95%] mx-auto max-w-[380px] shadow-md" key={item}>
                                    <img src={homeImages[item]} alt="Product" className="rounded-lg shadow-lg" />
                                    <h2>Topic 1</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-5 min-h-[50vh]'>
                <div className='p-5'>
                    <h2 className='text-2xl md:text-5xl font-semibold text-center'>Your Beauty and Skin Success starts here</h2>
                </div>
                <div>
                    
                </div>
            </div>



            <div className="flex flex-wrap bg-pink-300 justify-center items-center h-screen">
                <div className="text-center text-white p-10 rounded-lg shadow-lg bg-pink-200 w-1/2 h-1/2">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Website!</h1>
                    <p className="text-xl">This is a simple React application with Tailwind CSS.</p>
                    <p className="text-xl">Feel free to explore the pages!</p>
                    <a href="/about" className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">Learn More</a>
                </div>
            </div>
        </>
    )
  };
  
export default Home;