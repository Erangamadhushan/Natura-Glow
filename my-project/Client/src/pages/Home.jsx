import React from 'react';
import homeImages from '../assets/assets.js';
import { Link } from 'react-router-dom';
//import {anime} from 'animejs';
import { useEffect, useRef } from 'react';

const Home = () => {
    // const boxOneRef = useRef(null);
    // const boxTwoRef = useRef(null);
    // const boxThreeRef = useRef(null);
    // useEffect(() => {
    //   const timeline = anime.timeline({
    //     easing: 'easeOutExpo',
    //     duration: 750
    //   });
      
    //   // Add animations to the timeline
    //   timeline
    //     .add({
    //       targets: boxOneRef.current,
    //       translateX: 250,
    //       backgroundColor: '#FF4081'
    //     })
    //     .add({
    //       targets: boxTwoRef.current,
    //       translateX: 250,
    //       backgroundColor: '#00BCD4'
    //     })
    //     .add({
    //       targets: boxThreeRef.current,
    //       translateX: 250,
    //       backgroundColor: '#76FF03'
    //     });
    // }, []);

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
                    <div className="timeline-container">
                        {/* <div 
                            ref={boxOneRef} 
                            style={{ 
                            height: '50px', 
                            width: '50px', 
                            backgroundColor: '#E91E63',
                            marginBottom: '10px'
                            }} 
                        ></div>
                        <div 
                            ref={boxTwoRef} 
                            style={{ 
                            height: '50px', 
                            width: '50px', 
                            backgroundColor: '#03A9F4',
                            marginBottom: '10px'
                            }} 
                        >
                        </div>
                        <div 
                            ref={boxThreeRef} 
                            style={{ 
                            height: '50px', 
                            width: '50px', 
                            backgroundColor: '#4CAF50'
                            }} 
                        >
                        </div> */}
                    </div>
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

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>

                </div>
                <div className='p-10'>
                    <h2 className='text-center text-2xl md:text-4xl lg:text-6xl font-semibold py-5'>Explore <span className='text-pink-500'>Our Skin Care</span> Product</h2>
                    <p className='text-center text-lg p-10'>Embark on a skincare journey with Natura Glow's Explorer Collection. Crafted for the modern woman who refuses to compromise, this premium line combines cutting-edge skincare science with nature's most powerful ingredients. Each product in this collection is designed to work in harmony with your skin's natural processes, delivering visible results without harsh chemicals or artificial additives.</p>
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