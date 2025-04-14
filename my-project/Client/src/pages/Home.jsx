import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/scrollReveal.js';
//import style from '../App.css';
//import {anime} from 'animejs';
import { mainImage, cosmeticsImage, cosmeticsDetails, popularItems } from '../assets/assets.js'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef } from 'react';

const Home = () => {
    useScrollReveal();

    const cosmeticsStyles = {
        backgroundColor: 'white',
        minHeight:'200px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
    }
    
    return (
        <>
            <div className="grid ld:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 min-h-[80vh] " style={{backgroundImage:`url(${mainImage})`,objectFit:'cover',backgroundRepeat:'no-repeat',width:'100%'}}>
                <div className='flex justify-center items-center flex-col text-white scroll-left'>
                    <h1 className="text-4xl font-bold text-white p-5 ">Flat 20% Off</h1>
                    <h2 className=" text-3xl md:text-6xl text-center font-bold text-white p-5" >Discover Your Natural Radiance with Natura Glow</h2>
                    <p className='py-10 text-lg'>Premium cosmetics crafted with natural ingredients to enhance your beauty, not mask it.</p>
                    <Link to="/product" className="bg-pink-600 p-4 rounded-lg px-10 text-xl text-white">Shop Now</Link>
                </div>
                <div className="flex justify-center items-center h-screen" >
                    <div className="timeline-container">
                        <DotLottieReact src="path/to/animation.lottie" loop autoplay />
                    </div>
                </div>
            </div>
            <div className='py-10 flex flex-col justify-center items-center min-h-[50vh]'>
                <div className='py-10'>
                    <h1 className=' text-2xl md:text-5xl font-bold text-black text-center'>Our <span className='text-pink-500'>Best</span> Sellers</h1>
                    <p className='text-lg text-center '>Explore our top-rated products loved by our customers.</p>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    {
                        popularItems.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center items-center p-5 w-[350px] duration-300 hover:scale(1.5)" style={cosmeticsStyles}>
                                    <img src={item.image} alt={item.name} className="w-[250px] h-[250px]"/>
                                    <p className='text-center py-3 text-xl font-bold'>{item.title}</p>
                                    <p className='text-center'>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='py-10 flex flex-col justify-center items-center gap-4 min-h-[50vh]'>
                <div>
                    <h2 className='text-center text-2xl md:text-5xl font-bold'>Our Products Are</h2>
                </div>
                <div className='flex flex-wrap flex-row justify-center items-center gap-5 my-10'>
                    {
                        cosmeticsDetails.map((item, index) => {
                            return (
                                <div key={index} style={cosmeticsStyles} className='flex flex-col p-4 m-5 justify-center items-center scroll-items-200 w-[200px]'>
                                    <img src={item.image} className='w-10 h-10' alt={item.name}/>
                                    <h2 className='text-lg font-semibold py-5'>{item.name}</h2>
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
                <div className='p-10 scroll-up'>
                    <img src={cosmeticsImage} className='w-full' alt='main cosmetics images'/>
                </div>
                <div className='p-10 scroll-up'>
                    <h2 className='text-center text-2xl md:text-4xl lg:text-6xl font-semibold py-5'>Explore <span className='text-pink-500'>Our Skin Care</span> Product</h2>
                    <p className='text-center text-lg p-10'>Embark on a skincare journey with Natura Glow's Explorer Collection. Crafted for the modern woman who refuses to compromise, this premium line combines cutting-edge skincare science with nature's most powerful ingredients. Each product in this collection is designed to work in harmony with your skin's natural processes, delivering visible results without harsh chemicals or artificial additives.</p>
                </div>
            </div>

        </>
    )
  };
  
export default Home;